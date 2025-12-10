import { Router } from "express";
import {
  sortByAddedAccending,
  sortByAddedDescending,
} from "../controllers/filter.controller";

const filterRoutes = Router();

filterRoutes.get("/added/asc/:page", sortByAddedAccending);
filterRoutes.get("/added/desc/:page", sortByAddedDescending);

export default filterRoutes;
