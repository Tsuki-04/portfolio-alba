import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  CakeSlice,
  Contact,
  Database,
  ExternalLink,
  Heart,
  LockKeyhole,
  PackageCheck,
  PanelTop,
  ScrollText,
  Server,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Terminal,
  UserRound,
} from "lucide-react";

import {
  FaCss3Alt,
  FaDocker,
  FaHtml5,
  FaJs,
  FaPhp,
} from "react-icons/fa";

import {
  SiApache,
  SiMariadb,
  SiMysql,
} from "react-icons/si";

import ProjectImageGallery from "../components/ProjectImageGallery";
import { projects, routes } from "../data/projects";

const projectGalleryItems = [
  {
    title: { es: "Página principal", en: "Homepage" },
    src: "img/projects/le-jardin/gallery/le-jardin-home.webp",
    alt: {
      es: "Vista de la página principal de Le Jardin de Berry",
      en: "Le Jardin de Berry homepage preview",
    },
  },
  {
    title: { es: "Productos destacados", en: "Featured products" },
    src: "img/projects/le-jardin/gallery/le-jardin-featured-products.webp",
    alt: {
      es: "Sección de productos destacados de Le Jardin de Berry",
      en: "Le Jardin de Berry featured products section",
    },
  },
  {
    title: { es: "Nuestra esencia", en: "Our essence" },
    src: "img/projects/le-jardin/gallery/le-jardin-essence.webp",
    alt: {
      es: "Sección nuestra esencia de Le Jardin de Berry",
      en: "Le Jardin de Berry essence section",
    },
  },
  {
    title: { es: "Catálogo", en: "Catalogue" },
    src: "img/projects/le-jardin/gallery/le-jardin-catalog.webp",
    alt: {
      es: "Catálogo de productos de Le Jardin de Berry",
      en: "Le Jardin de Berry product catalogue",
    },
  },
  {
    title: { es: "Ficha de producto", en: "Product page" },
    src: "img/projects/le-jardin/gallery/le-jardin-product-page.webp",
    alt: {
      es: "Ficha de producto de Le Jardin de Berry",
      en: "Le Jardin de Berry product page",
    },
  },
  {
    title: { es: "Inicio de sesión", en: "Login" },
    src: "img/projects/le-jardin/gallery/le-jardin-login.webp",
    alt: {
      es: "Página de inicio de sesión de Le Jardin de Berry",
      en: "Le Jardin de Berry login page",
    },
  },
  {
    title: { es: "Crear cuenta", en: "Register" },
    src: "img/projects/le-jardin/gallery/le-jardin-register.webp",
    alt: {
      es: "Página de creación de cuenta de Le Jardin de Berry",
      en: "Le Jardin de Berry register page",
    },
  },
  {
    title: { es: "Panel cliente", en: "Client panel" },
    src: "img/projects/le-jardin/gallery/le-jardin-client-panel.webp",
    alt: {
      es: "Panel de cliente de Le Jardin de Berry",
      en: "Le Jardin de Berry client panel",
    },
  },
  {
    title: { es: "Panel administración", en: "Admin panel" },
    src: "img/projects/le-jardin/gallery/le-jardin-admin-panel.webp",
    alt: {
      es: "Panel de administración de Le Jardin de Berry",
      en: "Le Jardin de Berry admin panel",
    },
  },
];

const projectSummaryItems = [
  {
    title: "Catálogo de productos",
    text: "Productos organizados por categorías con imágenes y detalles.",
    icon: CakeSlice,
  },
  {
    title: "Carrito y pedidos",
    text: "Flujo de compra con carrito, checkout y registro de pedidos.",
    icon: ShoppingCart,
  },
  {
    title: "Zona de usuario",
    text: "Registro, login y consulta de pedidos desde el perfil.",
    icon: UserRound,
  },
  {
    title: "Panel de administración",
    text: "Gestión interna de productos, pedidos, contactos y usuarios.",
    icon: PanelTop,
  },
];

const projectTechnologies = [
  { name: "PHP", icon: FaPhp, color: "#777bb4" },
  { name: "HTML", icon: FaHtml5, color: "#e34f26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572b6" },
  { name: "JavaScript", icon: FaJs, color: "#f7df1e" },
  { name: "MySQL", icon: SiMysql, color: "#4479a1" },
  { name: "MariaDB", icon: SiMariadb, color: "#003545" },
  { name: "Apache", icon: SiApache, color: "#d22128" },
  { name: "Docker", icon: FaDocker, color: "#2496ed" },
  { name: "Scripting", icon: Terminal, color: "#475569" },
];

const projectFeatures = [
  {
    title: "Catálogo de productos",
    icon: CakeSlice,
  },
  {
    title: "Ficha individual de producto",
    icon: ScrollText,
  },
  {
    title: "Carrito y checkout",
    icon: ShoppingCart,
  },
  {
    title: "Login y registro",
    icon: LockKeyhole,
  },
  {
    title: "Área de cliente",
    icon: UserRound,
  },
  {
    title: "Panel de administración",
    icon: PanelTop,
  },
  {
    title: "Gestión de pedidos",
    icon: PackageCheck,
  },
  {
    title: "Formulario de contacto",
    icon: Contact,
  },
  {
    title: "Base de datos relacional",
    icon: Database,
  },
  {
    title: "Rutas protegidas y consultas preparadas",
    icon: ShieldCheck,
  },
];

function TechnologyPill({ technology }) {
  const Icon = technology.icon;

  return (
    <span
      className="le-jardin-tech-pill"
      style={{ "--tech-color": technology.color }}
    >
      <Icon size={18} />
      {technology.name}
    </span>
  );
}

function SummaryItem({ item }) {
  const Icon = item.icon;

  return (
    <article className="le-jardin-summary-item">
      <span className="le-jardin-summary-icon">
        <Icon size={25} />
      </span>

      <div>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </div>
    </article>
  );
}

function FeatureItem({ feature }) {
  const Icon = feature.icon;

  return (
    <article className="le-jardin-feature-item">
      <span>
        <Icon size={17} />
      </span>

      <p>{feature.title}</p>

      <ArrowRight size={16} />
    </article>
  );
}

function LeJardinProjectPage({ content, language }) {
  return (
    <main className="portfolio-main">
      <section className="le-jardin-page">
        <a className="back-link" href={routes.projects}>
          <ArrowLeft size={16} />
          {content.detailPage.backProjects}
        </a>

        <motion.article
          className="le-jardin-hero"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <ProjectImageGallery
            items={projectGalleryItems}
            language={language}
          />

          <div className="le-jardin-hero-content">
            <div className="le-jardin-kicker">
              <span className="le-jardin-kicker-icon">୨୧</span>
              <span className="eyebrow">{content.detailPage.eyebrow}</span>
            </div>

            <h1>{content.detailPage.title}</h1>

            <p className="le-jardin-subtitle">
              Aplicación web full stack para una pastelería ficticia, desarrollada como proyecto final.
            </p>

            <p className="le-jardin-description">
              Web e-commerce completa con catálogo, carrito, sistema de pedidos, área de cliente y panel de administración conectado a base de datos.
            </p>

            <button
              className="button button-primary le-jardin-demo-button"
              type="button"
              disabled
            >
              <ExternalLink size={18} />
              Ver proyecto
            </button>
          </div>
        </motion.article>

        <section className="le-jardin-summary-strip" aria-label="Resumen del proyecto">
          <div className="le-jardin-summary-title">
            <h2>Resumen del proyecto</h2>
          </div>

          {projectSummaryItems.map((item) => (
            <SummaryItem key={item.title} item={item} />
          ))}
        </section>

        <section className="le-jardin-info-grid">
          <article className="le-jardin-panel le-jardin-work-panel">
            <span className="le-jardin-panel-bow" aria-hidden="true">
              ୨୧
            </span>

            <div className="le-jardin-panel-heading">
              <Heart size={20} />
              <h2>Mi trabajo en el proyecto</h2>
            </div>

            <p>
              Desarrollé el proyecto completo, desde la estructura inicial y la base de datos hasta las páginas públicas, la lógica de carrito y pedidos, el área de usuario, el panel interno y la preparación del entorno de despliegue.
            </p>
          </article>

          <article className="le-jardin-panel">
            <div className="le-jardin-panel-heading">
              <Server size={20} />
              <h2>Tecnologías usadas</h2>
            </div>

            <div className="le-jardin-tech-list">
              {projectTechnologies.map((technology) => (
                <TechnologyPill key={technology.name} technology={technology} />
              ))}
            </div>
          </article>
        </section>

        <section className="le-jardin-panel le-jardin-features-panel">
          <div className="le-jardin-panel-heading">
            <Sparkles size={20} />
            <h2>Funcionalidades principales</h2>
          </div>

          <div className="le-jardin-features-grid">
            {projectFeatures.map((feature) => (
              <FeatureItem key={feature.title} feature={feature} />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

export default LeJardinProjectPage;
