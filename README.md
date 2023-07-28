# Calven API Client Library

This library provides clients for the Calven API.

## Installation

```bash
npm install @calven-code/client
```

## Usage

The library provides clients for the following Calven API services:
* Occupancy events
* Presence events
* Timeoff notification events

The library exposes the `CalvenClient` class, which provides static factory methods for creating clients for the above services.

Each method accepts an API Key and an API key secret.  You can optionally provide the base URL for the Calven API.  If you do not provide a base URL, the client will use the default Calven API URL.



### Occupancy client

```typescript
import { CalvenClient, CalvenTimeOffEvent, CalvenTimeOffEventType } from '@calven/client'

const timeoffClient = CalvenClient.occupancyClient(apiKey,apiSecret)

const timeOffEvent: CalvenTimeOffEvent = {
  startDate: new Date(),
  endDate: new Date(),
  email:'Mary.Jones@example.com',
  eventType: CalvenTimeOffEventType.SCHEDULED,
  timeOffType: CalvenTimeOffType.LEAVE
}

const timeOffResult = await timeoffClient.sendTimeoff('my-source-id',[timeOffEvent])
```

### Presence client

```typescript
import { CalvenClient, CalvenTimeOffEvent, CalvenTimeOffEventType } from '@calven/client'

const timeoffClient = CalvenClient.timeoffClient(apiKey,apiSecret)

const timeOffEvent: CalvenTimeOffEvent = {
  startDate: new Date(),
  endDate: new Date(),
  email:'Mary.Jones@example.com',
  eventType: CalvenTimeOffEventType.SCHEDULED,
  timeOffType: CalvenTimeOffType.LEAVE
}

const timeOffResult = await timeoffClient.sendTimeoff('my-source-id',[timeOffEvent])
```

### Timeoff client

```typescript
import { CalvenClient, CalvenTimeOffEvent, CalvenTimeOffEventType } from '@calven/client'

const timeoffClient = CalvenClient.timeoffClient(apiKey,apiSecret)

const timeOffEvent: CalvenTimeOffEvent = {
  startDate: new Date(),
  endDate: new Date(),
  email:'Mary.Jones@example.com',
  eventType: CalvenTimeOffEventType.SCHEDULED,
  timeOffType: CalvenTimeOffType.LEAVE
}

const timeOffResult = await timeoffClient.sendTimeoff([timeOffEvent])
```