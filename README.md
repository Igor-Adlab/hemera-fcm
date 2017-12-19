# Hemera FCM
Plugin for Firebase Cloud Messaging

## Examples

### Setup
```json
const FCM = require('hemera-fcm');
...
...
hemera.use(FCM, { credentials: require('./google-services') });
```

### Send notification
```json
{
	"cmd": "CMD_SEND_DEVICE" || "CMD_SEND_TOPIC" || "CMD_SEND_GROUP",
	"topic": "TOPIC_FCM",
	"id": ["id-1", "id-2", "..."] 
	"payload": {
		"data": {...},
		"notification": {
			"title": "...",
			"body": "...",
		},
	},
}
```
    
### Subscribe / Unsubscribe to chanel
```json
{
	"cmd": "CMD_SUBSCRIBE" || "CMD_UNSUBSCRIBE",
	"topic": "TOPIC_FCM",
	"payload": {
		client: "...",
		topic: "...",
	},
}
```