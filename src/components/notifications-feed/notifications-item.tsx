import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import type { Notification } from '@/types';
import styles from './notifications-feed.module.scss';

dayjs.extend(relativeTime);

type Props = {
	item: Notification;
};

const TYPE_LABELS: Record<Notification['type'], string> = {
	info: 'Info',
	success: 'Success',
	warning: 'Warning',
	error: 'Error,',
};

export default function NotificationItemComponent({ item }: Props) {
	return (
		<li className={styles['feed-item']}>
			<div className={styles['item-header']}>
				<span
					className={`${styles['item-badge']} ${styles[`item-badge--${item.type}`]}`}
				>
					{TYPE_LABELS[item.type]}
				</span>
				<span className={styles['item-pet']}>{item.title}</span>
				<span className={styles['item-time']}>
					{dayjs(item.timestamp).fromNow()}
				</span>
			</div>
			<p className={styles['item-message']}>{item.message}</p>
			{item.read === false && (
				<p className={styles['item-detail']}>
					{item.read === false ? 'Unread' : 'Read'}
				</p>
			)}
		</li>
	);
}
