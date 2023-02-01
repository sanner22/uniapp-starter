import { componentGroup as common, componentsList as commonList } from '@/utils/tmui-helper/common';
import { componentGroup as layout, componentsList as layoutList } from '@/utils/tmui-helper/layout';
import { componentGroup as showdata, componentsList as showdataList } from '@/utils/tmui-helper/showdata';
import { componentGroup as form, componentsList as formList } from '@/utils/tmui-helper/form';
import { componentGroup as feedback, componentsList as feedbackList } from '@/utils/tmui-helper/feedback';
import { componentGroup as nav, componentsList as navList } from '@/utils/tmui-helper/nav';
import { componentGroup as other, componentsList as otherList } from '@/utils/tmui-helper/other';
import { componentGroup as business, componentsList as businessList } from '@/utils/tmui-helper/business';

export const componentGroups = [
  { group: common, list: commonList },
  { group: layout, list: layoutList },
  { group: showdata, list: showdataList },
  { group: form, list: formList },
  { group: feedback, list: feedbackList },
  { group: nav, list: navList },
  { group: other, list: otherList },
  { group: business, list: businessList },
];
