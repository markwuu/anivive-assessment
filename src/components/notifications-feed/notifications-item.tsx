'use client';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import type { Notification } from '@/types';
import styles from './notifications-feed.module.scss';
import type { Dispatch, SetStateAction } from 'react';

dayjs.extend(relativeTime);

type Props = {
	item: Notification;
	setNotifications: Dispatch<SetStateAction<Notification[]>>;
};

const TYPE_LABELS: Record<Notification['type'], string> = {
	info: 'Info',
	success: 'Success',
	warning: 'Warning',
	error: 'Error',
};

export default function NotificationItemComponent({
	item,
	setNotifications,
}: Props) {
	return (
		<li
			className={styles['feed-item']}
			onClick={() =>
				setNotifications((prev) =>
					prev.map((n) => (n.id === item.id ? { ...n, read: true } : n)),
				)
			}
		>
			<div className={styles['item-header']}>
				<span
					className={`${styles['item-badge']} ${styles[`item-badge--${item.type}`]}`}
				>
					{TYPE_LABELS[item.type]}
				</span>
				<span className={styles['item-title']}>{item.title}</span>
				<span className={styles['item-time']}>
					{dayjs(item.timestamp).fromNow()}
				</span>
			</div>
			<p className={styles['item-message']}>{item.message}</p>

			<p className={styles['item-detail']}>
				{item.read === false ? 'Unread' : 'Read'}
			</p>
		</li>
	);
}
