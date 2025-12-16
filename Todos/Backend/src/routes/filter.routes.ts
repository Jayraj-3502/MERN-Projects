import { Router } from "express";
import {
  sortByAddedAccendingComplete,
  sortByAddedAccendingIncomplete,
  sortByAddedDescendingComplete,
  sortByAddedDescendingIncomplete,
  sortByDueDateAccendingComplete,
  sortByDueDateAccendingIncomplete,
  sortByDueDateDescendingComplete,
  sortByDueDateDescendingIncomplete,
  sortByLatestModifiedAccendingComplete,
  sortByLatestModifiedAccendingIncomplete,
  sortByLatestModifiedDescendingComplete,
  sortByLatestModifiedDescendingIncomplete,
} from "../controllers/filter.controller";
import authMiddleware from "../middlewares/auth.middleware";

const filterRoutes = Router();

// InComplete filter routes
filterRoutes
  .route("/added/incomplete/asc/:page")
  .get(authMiddleware, sortByAddedAccendingIncomplete);
filterRoutes
  .route("/added/incomplete/desc/:page")
  .get(authMiddleware, sortByAddedDescendingIncomplete);
filterRoutes
  .route("/latest-modified/incomplete/asc/:page")
  .get(authMiddleware, sortByLatestModifiedAccendingIncomplete);
filterRoutes
  .route("/latest-modified/incomplete/desc/:page")
  .get(authMiddleware, sortByLatestModifiedDescendingIncomplete);
filterRoutes
  .route("/duedate/incomplete/asc/:page")
  .get(authMiddleware, sortByDueDateAccendingIncomplete);
filterRoutes
  .route("/duedate/incomplete/desc/:page")
  .get(authMiddleware, sortByDueDateDescendingIncomplete);

// Complete filter routes
filterRoutes
  .route("/added/complete/asc/:page")
  .get(authMiddleware, sortByAddedAccendingComplete);
filterRoutes
  .route("/added/complete/desc/:page")
  .get(authMiddleware, sortByAddedDescendingComplete);
filterRoutes
  .route("/latest-modified/complete/asc/:page")
  .get(authMiddleware, sortByLatestModifiedAccendingComplete);
filterRoutes
  .route("/latest-modified/complete/desc/:page")
  .get(authMiddleware, sortByLatestModifiedDescendingComplete);
filterRoutes
  .route("/duedate/complete/asc/:page")
  .get(authMiddleware, sortByDueDateAccendingComplete);
filterRoutes
  .route("/duedate/complete/desc/:page")
  .get(authMiddleware, sortByDueDateDescendingComplete);

export default filterRoutes;
