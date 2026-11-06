# NearTask — Local Services Marketplace

NearTask is a local services marketplace that connects customers with nearby service providers. It helps customers discover services, explore provider details, and submit booking requests through a simple and user-friendly platform.

## 1. Project Overview

Finding reliable people for everyday tasks can be time-consuming. NearTask aims to make this process easier by bringing customers and local service providers together in one platform.

The application supports two main user roles:

- **Customers:** Browse available services, search by keyword or category, view service details, and submit booking requests.
- **Service Providers:** Manage service offerings and view and respond to customer booking requests.

## 2. Key Features

### Customer Side
- Browse available local services.
- Search services by name, provider, or category.
- Filter services by category.
- View individual service details.
- Submit booking requests with preferred dates and descriptions.
- View submitted bookings and their statuses.
- Retain booking information using browser local storage.

### Provider Side
- Provider dashboard.
- Manage service listings.
- View incoming booking requests.
- Accept or reject booking requests.
- Track booking statuses.

*Note: The provider-side implementation is maintained separately and will be integrated into the shared project.*

## 3. Technology Stack

| Technology | Purpose |
|---|---|
| Next.js | Application framework |
| React | User interface |
| Tailwind CSS | Styling and responsive layouts |
| JavaScript | Application logic |
| React Context API | Shared booking state |
| Browser localStorage | Booking persistence |
| Git and GitHub | Version control and collaboration |

## 4. Getting Started

### Prerequisites
- Node.js
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/ashishcs25-del/NearTask.git
```

Navigate into the application directory:

```bash
cd NearTask
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the application at:

http://localhost:3000

### Production Build

To create a production build:

```bash
npm run build
```

## 5. Project Structure

```text
NearTask/
├── app/
│   ├── page.js
│   ├── layout.js
│   ├── bookings/
│   │   └── page.js
│   └── services/
│       └── [id]/
│           └── page.js
├── components/
│   ├── customer/
│   └── provider/
├── context/
│   └── BookingContext.js
├── data/
│   └── services.js
├── public/
├── package.json
└── README.md
```

## 6. Booking Workflow

1. A customer browses the available services.
2. The customer selects a service to view its details.
3. The customer submits a booking request.
4. The booking is stored in the shared React Context.
5. Booking information is persisted in browser localStorage.
6. The service provider can review and respond to the request once both application sides are integrated.

## 7. Current MVP Scope

The NearTask MVP focuses on:

- Local service discovery.
- Service search and filtering.
- Service details.
- Booking request submission.
- Booking status management.
- Customer and provider interfaces.

The following features are outside the current MVP scope:

- Online payments.
- Real-time GPS tracking.
- In-app chat.
- Production backend and database integration.

## 8. Collaboration

NearTask is developed collaboratively using Git and GitHub.

The project uses separate development branches to support customer-side and provider-side development before integration.

## 9. Future Improvements

Potential future enhancements include:

- User authentication.
- Database integration.
- Provider ratings and reviews.
- Online payments.
- Real-time notifications.
- Location-based service discovery.

---

**NearTask — Connecting local talent with local needs.**
