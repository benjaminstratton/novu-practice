"use client";

import {
  NovuProvider,
  PopoverNotificationCenter,
  NotificationBell,
} from '@novu/notification-center';

export const Header = () => {
  return (
    <NovuProvider subscriberId={'on-boarding-subscriber-id-123'} applicationIdentifier={'6BG5MrHvEKv1'}>
      <PopoverNotificationCenter colorScheme={'light'}>
        {({ unseenCount }) => <NotificationBell unseenCount={unseenCount} />}
      </PopoverNotificationCenter>
    </NovuProvider>
  );
};   