# Redwood Test

### Setup
```terminal
yarn install
```

### Setup the initial data
```terminal
yarn rw prisma migrate dev
```

### Fire it up
```terminal
yarn rw dev
```

### Test it
```terminal
yarn rw test
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/.redwood/functions/*`.
