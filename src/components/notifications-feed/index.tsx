import { getNotifications } from "@/lib/notifications";
import NotificationItemComponent from "./notifications-item";
import styles from "./notifications-feed.module.scss";

export default async function NotificationFeed() {
	const items = await getNotifications();

	if (items.length === 0) {
		return <p className={styles["empty-state"]}>No recent activity.</p>;
	}

	return (
		<ul className={styles["feed-list"]}>
			{items.map((item) => (
				<NotificationItemComponent key={item.id} item={item} />
			))}
		</ul>
	);
}
