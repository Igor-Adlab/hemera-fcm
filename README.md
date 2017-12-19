# Hemera FCM
Plugin for Firebase Cloud Messaging

## Examples

### Setup
```javascript
const FCM = require('hemera-fcm');
// Code...
hemera.use(FCM, { credentials: require('./google-services') });
```

### Send notification
```javascript
hemera.act({
	cmd: "CMD_SEND_DEVICE" || "CMD_SEND_TOPIC" || "CMD_SEND_GROUP",
	topic: "TOPIC_FCM",
	id: ["id-1", "id-2", "..."], 
	payload: {
		data: {},
		notification: {
			title: "...",
			body: "...",
		},
	},
}, function() {})
```
    
### Subscribe / Unsubscribe to chanel
```javascript
hemera.act({
	cmd: "CMD_SUBSCRIBE" || "CMD_UNSUBSCRIBE",
	topic: "TOPIC_FCM",
	payload: {
		client: "...",
		topic: "...",
	},
}, function() {})
```