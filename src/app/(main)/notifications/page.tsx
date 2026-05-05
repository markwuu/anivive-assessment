import { Suspense } from 'react';
import NotificationsFeed from '@/components/notifications-feed';
import styles from './notifications.module.scss';
import { getNotifications } from '@/lib/notifications';

// Opt out of caching so activity data is fresh on each request.
export const dynamic = 'force-dynamic';

export default async function NotificationPage() {
	const items = await getNotifications();

	return (
		<div className={styles['notifications']}>
			<div className={styles['notifications-header']}>
				<h1 className={styles['notifications-title']}>Notifications</h1>
			</div>
			<div className={styles['notifications-grid']}>
				<section className={styles['notifications-section']}>
					<h2 className={styles['section-title']}>Recent Activity</h2>
					<Suspense
						fallback={<p className={styles['loading']}>Loading activity...</p>}
					>
						<NotificationsFeed items={items} />
					</Suspense>
				</section>
			</div>
		</div>
	);
}
