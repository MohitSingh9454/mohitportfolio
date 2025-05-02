// Projects.jsx
import React, { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "../components/ProjectsStyle";
import ProjectCard from "./ProjectCards"; // Adjust the import according to your file structure
import { projects } from "../components/constants";
import Modal from "./Modal"; // Import the modal

const Projects = () => {
  const [toggle, setToggle] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to Android
          apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          <ToggleButton
            active={toggle === "all"}
            onClick={() => setToggle("all")}
          >
            All
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "web app"}
            onClick={() => setToggle("web app")}
          >
            WEB APP'S
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "android app"}
            onClick={() => setToggle("android app")}
          >
            ANDROID APP'S
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "machine learning"}
            onClick={() => setToggle("machine learning")}
          >
            MACHINE LEARNING
          </ToggleButton>
        </ToggleButtonGroup>
        <CardContainer>
          {projects
            .filter(
              (project) => toggle === "all" || project.category === toggle
            )
            .map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => openModal(project)} // Pass the project to the modal
              />
            ))}
        </CardContainer>
      </Wrapper>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject} // Pass the selected project to the modal
      />
    </Container>
  );
};

export default Projects;













// export const projects = [
//   // MERN Stack Projects
//   {
//     id: 1,
//     title: "Library Management System",
//     category: "web app",
//     description:
//       "A Library Management System built using HTML, CSS, JavaScript for the frontend, and Node.js, Express, and MongoDB for backend operations.",
//     image: "library-management.png",
//     github: "https://github.com/yourusername/library-management-system",
//     demo: "",
//   },
//   {
//     id: 2,
//     title: "Blinkit Dashboard Clone",
//     category: "web app",
//     description:
//       "A Blinkit admin dashboard clone created using React.js for frontend, Node.js, and MongoDB for managing order, delivery, and product details.",
//     image: "blinkit-dashboard.png",
//     github: "https://github.com/yourusername/blinkit-dashboard",
//     demo: "",
//   },
//   {
//     id: 3,
//     title: "Netflix Clone",
//     category: "web app",
//     description:
//       "A Netflix-inspired MERN stack application with user authentication, movie streaming pages, and watchlist management.",
//     image: "netflix-clone.png",
//     github: "https://github.com/yourusername/netflix-clone",
//     demo: "",
//   },
//   {
//     id: 4,
//     title: "E-Commerce Website",
//     category: "web app",
//     description:
//       "An e-commerce web application built using the MERN stack with product listings, shopping cart, payment gateway, and admin dashboard.",
//     image: "ecommerce.png",
//     github: "https://github.com/yourusername/ecommerce-site",
//     demo: "",
//   },

//   // Data Science / Data Analytics Projects
//   {
//     id: 5,
//     title: "Sales Analysis Dashboard",
//     category: "machine learning",
//     description:
//       "A data visualization dashboard built in Tableau to analyze sales data trends, regional performance, and product insights.",
//     image: "sales-analysis.png",
//     github: "",
//     demo: "",
//   },
//   {
//     id: 6,
//     title: "Stock Price Prediction",
//     category: "machine learning",
//     description:
//       "A machine learning model using Python and LSTM to predict stock prices based on historical data and technical indicators.",
//     image: "stock-prediction.png",
//     github: "https://github.com/yourusername/stock-price-prediction",
//     demo: "",
//   },
//   {
//     id: 7,
//     title: "Covid-19 Data Analysis",
//     category: "machine learning",
//     description:
//       "An interactive dashboard and Python analysis notebook to track and analyze COVID-19 cases, recoveries, and fatalities globally.",
//     image: "covid-analysis.png",
//     github: "https://github.com/yourusername/covid19-analysis",
//     demo: "",
//   },
//   {
//     id: 8,
//     title: "Movie Recommendation System",
//     category: "machine learning",
//     description:
//       "A content-based movie recommendation system built using Python, Pandas, and Scikit-learn based on movie genres and user ratings.",
//     image: "movie-recommendation.png",
//     github: "https://github.com/yourusername/movie-recommendation",
//     demo: "",
//   },
//   {
//     id: 9,
//     title: "Customer Segmentation",
//     category: "machine learning",
//     description:
//       "Used K-means clustering algorithm in Python to segment customers based on spending patterns and demographics for targeted marketing.",
//     image: "customer-segmentation.png",
//     github: "https://github.com/yourusername/customer-segmentation",
//     demo: "",
//   },
// ];
