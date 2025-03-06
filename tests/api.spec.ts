import { test, expect } from '@playwright/test';
import axios from 'axios';

// const API_KEY = 'f8812c5e1bf2122bad4a96827e3d9008';
// const CITY = 'Islamabad';

test('Verify OpenWeather API Response for Islamabad', async () => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=Islamabad&appid=f8812c5e1bf2122bad4a96827e3d9008&units=metric`
  );

  expect(response.status).toBe(200);
  console.log(`Temperature in Islamabad: ${response.data.main.temp}C`);
})
