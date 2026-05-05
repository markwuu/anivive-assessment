'use client';

import NotificationItemComponent from './notifications-item';
import styles from './notifications-feed.module.scss';
import type { Notification } from '@/types';
import { useState } from 'react';

type Props = {
	items: Notification[];
};

export default function NotificationFeed({ items }: Props) {
	const [notifications, setNotifications] = useState<Notification[]>(items);
	const unreadCount = notifications.reduce(
		(count, notif) => count + (notif.read ? 0 : 1),
		0,
	);

	if (notifications.length === 0) {
		return <p className={styles['empty-state']}>No recent activity.</p>;
	}

	return (
		<ul className={styles['feed-list']}>
			{unreadCount === 0 ? (
				<h2>All caught up!</h2>
			) : (
				<h2>Unread notifications ({unreadCount})</h2>
			)}
			{notifications.map((notification) => (
				<NotificationItemComponent
					key={notification.id}
					item={notification}
					setNotifications={setNotifications}
				/>
			))}
		</ul>
	);
}
