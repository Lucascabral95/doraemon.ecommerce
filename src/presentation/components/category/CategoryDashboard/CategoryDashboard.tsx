import React from "react";
import { Link } from "react-router-dom";
import { CATEGORY_DASHBOARD } from "../../../../infrastructure/constants/categories.constants";

interface Subcategory {
  readonly id: string;
  readonly name: string;
  readonly route: string;
}

interface Category {
  readonly id: string;
  readonly title: string;
  readonly route: string;
  readonly subcategories?: readonly Subcategory[];
}

type ReadonlyCategories = readonly Category[];

export const CategoryDashboard: React.FC = () => (
  <div className="dashboard">
    {(CATEGORY_DASHBOARD as unknown as ReadonlyCategories).map((category) => (
      <div
        key={category.id}
        className="contenedor"
        style={{
          paddingBottom: category.id === "regalos" ? "0px" : undefined,
        }}
      >
        <div className="contenedor-titulo">
          <Link to={category.route}>
            <h2 className="dashboard-titulo">{category.title}</h2>
          </Link>
        </div>
        {category.subcategories && category.subcategories.length > 0 && (
          <ul>
            {category.subcategories.map((sub) => (
              <li key={sub.id}>
                <Link to={sub.route} className="texto">
                  {sub.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </div>
);
