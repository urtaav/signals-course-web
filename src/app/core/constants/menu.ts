import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Topics',
      separator: false,
      items: [
        {
          icon: 'icons/heroicons/custom/change-detection.svg',
          label: 'Change Detection',
          route: '/change-detection',
          children: [{ label: 'Default Change Detection indirect', route: '/change-detection/default-change-detection-indirect' },
          { label: 'Default Change Detection direct', route: '/change-detection/default-change-detection-direct' },
          { label: 'OnPush Change Detection', route: '/change-detection/onpush-change-detection' },
          { label: 'Signal Change Detection', route: '/change-detection/signal-change-detection' },
          ],
        },
        {
          icon: 'icons/heroicons/custom/core-primitives.svg',
          label: 'Core Primitives',
          route: '/core-primitives',
          children: [
            { label: 'Counter Computed Signal', route: '/core-primitives/counter-signal' },
            { label: 'Counter Effect Signal', route: '/core-primitives/counter-effect' },
            { label: 'LinkedSignal ', route: '/core-primitives/linkedSignal' },
            { label: 'LinkedSignal Race Condition', route: '/core-primitives/linkedSignal-race' }
          ],
        },
        {
          icon: 'icons/heroicons/custom/input-output.svg',
          label: 'Input / Output',
          route: '/errors',
          children: [
            { label: 'Using Decorators', route: '/input-ouput/decorator' },
            { label: 'Using Signals', route: '/input-ouput/signals' },
          ],
        },
        {
          icon: 'icons/heroicons/custom/model.svg',
          label: 'Model Examples',
          route: '/errors',
          children: [
            { label: 'ng-model Example', route: '/errors/404' },
            { label: 'Model Signal', route: '/errors/500' },
            { label: '/model-io-signal', route: '/errors/500' },
          ],
        },
        {
          icon: 'icons/heroicons/custom/queries.svg',
          label: 'Queries',
          route: '/errors',
          children: [
            { label: 'Query Decorator', route: '/errors/404' },
            { label: 'Query Signal', route: '/errors/500' },
          ],
        },
        {
          icon: 'icons/heroicons/custom/router.svg',
          label: 'Router',
          route: '/errors',
          children: [
            { label: 'Without Signals', route: '/errors/404' },
            { label: 'With Signals', route: '/errors/500' },
          ],
        },
        {
          icon: 'icons/heroicons/custom/async.svg',
          label: 'Async / Resources',
          route: '/errors',
          children: [
            { label: 'Async HttpClient', route: '/errors/404' },
            { label: 'Resource Signal', route: '/errors/500' },
            { label: 'Async httpResource', route: '/errors/500' },
          ],
        },
        {
          icon: 'icons/heroicons/custom/rxjs.svg',
          label: 'RxJS Interop',
          route: '/errors',
          children: [
            { label: 'toSignal', route: '/errors/404' },
            { label: 'toObservable', route: '/errors/500' },
            { label: 'rxResource', route: '/errors/500' },
            { label: 'takeUntilDestroyed', route: '/errors/500' },
            { label: 'Output Examples', route: '/errors/500' },
          ],
        },
      ],
    },
    {
      group: 'Config',
      separator: false,
      items: [
        {
          icon: 'icons/heroicons/outline/cog.svg',
          label: 'Settings',
          route: '/settings',
        },
        {
          icon: 'icons/heroicons/outline/bell.svg',
          label: 'Notifications',
          route: '/gift',
        },
        {
          icon: 'icons/heroicons/outline/folder.svg',
          label: 'Folders',
          route: '/folders',
          children: [
            { label: 'Current Files', route: '/folders/current-files' },
            { label: 'Downloads', route: '/folders/download' },
            { label: 'Trash', route: '/folders/trash' },
          ],
        },
      ],
    },
  ];
}