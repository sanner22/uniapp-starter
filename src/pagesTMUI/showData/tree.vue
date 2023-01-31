<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="30" _class="font-weight-b" label="基础示例,更多见文档"></tm-text>
      <tm-divider></tm-divider>
      <tm-tree @node-click="test" :data="dlist"></tm-tree>
    </tm-sheet>
  </tm-app>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  const dlist = ref(loop());

  interface TreeNodeType {
    text: string;
    id: string;
    disabled: boolean;
    children?: TreeNodeType[];
  }

  function loop(path = '0', level = 2) {
    const list = [];
    for (let i = 0; i < 5; i += 1) {
      const key = `${path}-${i}`;
      const treeNode: TreeNodeType = {
        text: '选项' + key,
        id: key,
        disabled: i == 1,
      };

      if (level > 0) {
        treeNode.children = loop(key, level - 1);
      }

      list.push(treeNode);
    }
    return list;
  }

  function test(e: any) {
    console.log(e);
  }
</script>
