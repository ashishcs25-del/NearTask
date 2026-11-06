
"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import initialServices from "../data/services";

const ServiceContext = createContext(null);

export function ServiceProvider({ children }) {
  const [services, setServices] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load saved services from localStorage
  useEffect(() => {
    try {
      const savedServices = localStorage.getItem("neartask-services");

      if (savedServices) {
        const parsedServices = JSON.parse(savedServices);

        if (Array.isArray(parsedServices)) {
          setServices(parsedServices);
        } else {
          setServices(initialServices);
        }
      } else {
        setServices(initialServices);
      }
    } catch (error) {
      console.error("Error loading services:", error);
      setServices(initialServices);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save services after initial loading
  useEffect(() => {
    if (!isLoaded) return;

    try {
      localStorage.setItem(
        "neartask-services",
        JSON.stringify(services)
      );
    } catch (error) {
      console.error("Error saving services:", error);
    }
  }, [services, isLoaded]);

  // Add a new service
  function addService(service) {
    const newService = {
      ...service,
      id: Date.now().toString(),
      rating: 0,
      status: "Active",
    };

    setServices((previousServices) => [
      ...previousServices,
      newService,
    ]);

    return newService;
  }

  // Delete a service
  function deleteService(id) {
    setServices((previousServices) =>
      previousServices.filter(
        (service) => service.id !== id
      )
    );
  }

  return (
    <ServiceContext.Provider
      value={{
        services,
        addService,
        deleteService,
        isLoaded,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
}

// Custom hook
export function useServices() {
  const context = useContext(ServiceContext);

  if (!context) {
    throw new Error(
      "useServices must be used inside ServiceProvider"
    );
  }

  return context;
}
