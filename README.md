# Django, ReactJS, Typescript, Tailwindcss, ViteJS Template

It's a template project for easy building.

## Setup Instructions

### Prerequisites
- Python 3.12 or higher
- Node.js 24 or higher
- Rye (Python package manager)
- pnpm (Node.js package manager)

### Backend (Django) Setup

```shell
# Install project dependencies
rye sync

# Run database migrations
rye run python manage.py migrate

# Create development superuser (optional)
rye run python manage.py createsuperuser
```

### Frontend (React) Setup

```shell
# Install dependencies
pnpm install
```

## Starting Development Servers

Start both backend and frontend development servers simultaneously.
Changes will trigger automatic reloading.

```shell
pnpm run dev
```

## Development Environment Configuration

- Backend: Django (http://localhost:8000)
- Frontend: Vite (http://localhost:5173)
- Database: SQLite
