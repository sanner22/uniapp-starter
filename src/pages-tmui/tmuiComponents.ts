import { componentGroup as common, componentsList as commonList } from '@/pages-tmui/common/_index';
import { componentGroup as layout, componentsList as layoutList } from '@/pages-tmui/layout/_index';
import { componentGroup as showdata, componentsList as showdataList } from '@/pages-tmui/showdata/_index';
import { componentGroup as form, componentsList as formList } from '@/pages-tmui/form/_index';
import { componentGroup as feedback, componentsList as feedbackList } from '@/pages-tmui/feedback/_index';
import { componentGroup as nav, componentsList as navList } from '@/pages-tmui/nav/_index';
import { componentGroup as other, componentsList as otherList } from '@/pages-tmui/other/_index';
import { componentGroup as business, componentsList as businessList } from '@/pages-tmui/business/_index';

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
