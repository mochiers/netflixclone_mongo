import express from 'express';

import { getTrendingTvSeries, getTvSeriesTrailers, getTvSeriesDetails, getSimilarTvSeries, getTvSeriesByCategory  } from '../controllers/tv.controller.js'

const router = express.Router();

router.get("/trending", getTrendingTvSeries);
router.get("/:id/trailers", getTvSeriesTrailers);
router.get("/:id/details", getTvSeriesDetails);
router.get("/:id/similar", getSimilarTvSeries);
router.get("/:category", getTvSeriesByCategory);

export default router;