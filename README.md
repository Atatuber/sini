# Sini

Website of Sini Lunchroom

## How-to run

```
docker compose up -d # Running on localhost:5173
```

### Full rebuild

```
docker-compose down # Stop everything
docker-compose build --no-cache # Rebuild fresh
docker-compose up -d # Start
docker-compose logs -f # Watch logs (ctrl+c to exit)
```
