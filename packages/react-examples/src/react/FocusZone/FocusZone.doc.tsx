import * as React from 'react';
import { FocusZonePhotosExample } from './FocusZone.Photos.Example';

import { IDocPageProps } from '@fluentui/react-internal/lib/common/DocPage.types';
import { FocusZoneListExample } from './FocusZone.List.Example';
import { FocusZoneDisabledExample } from './FocusZone.Disabled.Example';
import { FocusZoneTabbableExample } from './FocusZone.Tabbable.Example';
import { FocusZoneHorizontalMenuExample } from './FocusZone.HorizontalMenu.Example';

const FocusZonePhotosExampleCode = require('!raw-loader!@fluentui/react-examples/src/react/FocusZone/FocusZone.Photos.Example.tsx') as string;
const FocusZoneListExampleCode = require('!raw-loader!@fluentui/react-examples/src/react/FocusZone/FocusZone.List.Example.tsx') as string;
const FocusZoneDisabledExampleCode = require('!raw-loader!@fluentui/react-examples/src/react/FocusZone/FocusZone.Disabled.Example.tsx') as string;
const FocusZoneTabbableCode = require('!raw-loader!@fluentui/react-examples/src/react/FocusZone/FocusZone.Tabbable.Example.tsx') as string;

const FocusZoneHorizontalMenuExampleCode = require('!raw-loader!@fluentui/react-examples/src/react/FocusZone/FocusZone.HorizontalMenu.Example.tsx') as string;

export const FocusZonePageProps: IDocPageProps = {
  title: 'FocusZone',
  componentName: 'FocusZone',
  componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/react/src/components/FocusZone',
  examples: [
    {
      title: 'Non-uniform photos within bidirectional FocusZone',
      code: FocusZonePhotosExampleCode,
      view: <FocusZonePhotosExample />,
    },
    {
      title: 'Nesting FocusZones in list rows',
      code: FocusZoneListExampleCode,
      view: <FocusZoneListExample />,
    },
    {
      title: 'Disabled FocusZone',
      code: FocusZoneDisabledExampleCode,
      view: <FocusZoneDisabledExample />,
    },
    {
      title: 'Tabbable FocusZone',
      code: FocusZoneTabbableCode,
      view: <FocusZoneTabbableExample />,
    },
    {
      title: 'Horizontal menu in FocusZone with all arrows key navigation',
      code: FocusZoneHorizontalMenuExampleCode,
      view: <FocusZoneHorizontalMenuExample />,
    },
  ],
  overview: require<string>('!raw-loader!@fluentui/react-examples/src/react/FocusZone/docs/FocusZoneOverview.md'),
  isHeaderVisible: true,
  isFeedbackVisible: true,
  allowNativeProps: true,
};
