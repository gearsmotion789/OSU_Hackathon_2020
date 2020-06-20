# OSU_Hackathon_2020

### Prerequisites
- get your API key from the Google Cloud console, and enable Maps API

```
npm install
npm run build
docker build -t gearsmotion789/welcome-to-osu .
docker-compose up -d
docker push gearsmotion789/welcome-to-osu
```