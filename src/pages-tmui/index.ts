import { componentGroup as common, componentsList as commonList } from './common/index';
import { componentGroup as layout, componentsList as layoutList } from './layout/index';
import { componentGroup as showData, componentsList as showDataList } from './showData/index';
import { componentGroup as form, componentsList as formList } from './form/index';
import { componentGroup as feedback, componentsList as feedbackList } from './feedback/index';
import { componentGroup as nav, componentsList as navList } from './nav/index';
import { componentGroup as other, componentsList as otherList } from './other/index';
import { componentGroup as business, componentsList as businessList } from './business/index';

export const componentGroups = [
  { group: common, list: commonList },
  { group: layout, list: layoutList },
  { group: showData, list: showDataList },
  { group: form, list: formList },
  { group: feedback, list: feedbackList },
  { group: nav, list: navList },
  { group: other, list: otherList },
  { group: business, list: businessList },
];
