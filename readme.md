# Template with docker for Vite⚡️React🌐Django💚, Postgres🔍️, Gunicorn✨

### ⚡️|Development

Uses the default Django development server.

1. Build the images and run the containers:

    ```sh
    docker-compose up --build
    ```
	

    Test it out at ([http://localhost:5173](http://127.0.0.1:5173/)). The "app" folder is mounted into the container and your code changes apply automatically.

1. Init app (inside app container):
    ```sh
    python manage.py migrate
    ```
    ```sh
    python manage.py createsuperuser
    ```

1. Init data from backup.sql (inside db container):
    ```sh
    docker cp backup.sql <container_id_or_name>:backup.sql
    ```
    ```sh
    docker exec -it <container_id_or_name> /bin/bash
    ```
    ```sh
    psql -U <username> -d <database_name> -f backup.sql
    ```

### 🚀|Production

Uses gunicorn + nginx.

1. CP and Rename *.env.prod-sample* to *.env.prod* and *.env.prod.db-sample* to *.env.prod.db*. Update the environment variables.
1. Build the images and run the containers:

    ```sh
    docker-compose -f docker-compose.prod.yml up --build
    ```

    Test it out at [(http://localhost:5173](http://127.0.0.1:5173/)). No mounted folders. To apply changes, the image must be re-built.

1. Init app (inside app container):
    ```sh
    python manage.py migrate
    ```
    ```sh
    python manage.py createsuperuser
    ```

1. Init data from backup.sql (inside db container):
    ```sh
    docker cp backup.sql <container_id_or_name>:backup.sql
    ```
    ```sh
    docker exec -it <container_id_or_name> /bin/bash
    ```
    ```sh
    psql -U <username> -d <database_name> -f backup.sql
    ```
