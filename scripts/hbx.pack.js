// cli.exe open && uni build -p app && cli.exe pack --config \"$INIT_CWD\\uniapp.pack.json.local\" --iscustom true --safemode false

const { exec, spawn } = require('child_process');
const iconv = require('iconv-lite');

const arguments = process.argv.splice(2); // 参数
const dir = process.env.INIT_CWD; // npm package.json 所在目录
const packConfigUrl = `${dir}\\uniapp.pack.json.local`; // 打包配置参数

let iscustom = false;
let safemode = true;
let packMode = '云打包';

// 如果打包自定义基座
if (arguments.includes('custom')) {
  iscustom = true;
  safemode = false;
  packMode = '打包自定义基座';
}

(function () {
  exec('cli.exe open', error => {
    console.error(`- hbx 启动${!error ? '成功' : '失败'}…`);
  });

  const uni = spawn('uni', ['build', '-p app'], { shell: true });
  uni.stdout.on('data', data => console.log(`- uni: ${data}`));
  uni.stderr.on('data', data => console.error(`- uni: ${data}`));
  uni.on('error', err => console.error('- 编译失败：' + `${err}`));
  uni.on('close', _code => {
    console.log(`- 编译完成，开始[${packMode}]...`);

    const cli = spawn(
      'cli.exe',
      [
        'pack',
        `--config \"${packConfigUrl}\"`,
        `--iscustom ${iscustom}`,
        `--safemode ${safemode}`,
      ],
      { shell: true, stdio: 'pipe' },
    );
    cli.stdout.on('data', data =>
      console.log(`- HBuilderX cli: ${iconv.decode(data, 'gbk')}`),
    );
    cli.stderr.on('data', data =>
      console.error(`- HBuilderX cli: ${iconv.decode(data, 'gbk')}`),
    );
    cli.on('close', _code => console.log(`- ${packMode} 成功`));
    cli.on('error', err => console.error(`- ${packMode} 失败：${err}`));
  });
})();
