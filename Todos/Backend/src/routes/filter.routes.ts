import { Router } from "express";
import {
  sortByAddedAccending,
  sortByAddedDescending,
  sortByDueDateAccending,
  sortByDueDateDescending,
  sortByLatestModifiedAccending,
  sortByLatestModifiedDescending,
} from "../controllers/filter.controller";
import authMiddleware from "../middlewares/auth.middleware";

const filterRoutes = Router();

filterRoutes.get("/added/asc/:page", authMiddleware, sortByAddedAccending);
filterRoutes.get("/added/desc/:page", authMiddleware, sortByAddedDescending);
filterRoutes.get(
  "/latest-modified/asc/:page",
  authMiddleware,
  sortByLatestModifiedAccending
);
filterRoutes.get(
  "/latest-modified/desc/:page",
  authMiddleware,
  sortByLatestModifiedDescending
);
filterRoutes.get("/duedate/asc/:page", authMiddleware, sortByDueDateAccending);
filterRoutes.get(
  "/duedate/desc/:page",
  authMiddleware,
  sortByDueDateDescending
);

export default filterRoutes;
