import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PayrollSoftware from "./pages/PayrollSoftware";
import InventoryManagement from "./pages/InventoryManagement";
import ITSolutions from "./pages/ITSolutions";
import BPOServices from "./pages/BPOServices";
import ManpowerSupply from "./pages/ManpowerSupply";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Courses from "./components/Courses";
import CourseDetail from "./pages/CoursesDetail";
import Academy from "./pages/Academy";
import OurTeam from "./pages/OurTeam";
import Careers from "./pages/Careers";
import BillingSoftware from "./pages/BillingSoftware";
import ConstructionManagement from "./pages/ConstructionManagement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/payroll-software" element={<PayrollSoftware />} />
          <Route path="/products/inventory-management" element={<InventoryManagement />} />
          <Route path="/products/billing-software" element={<BillingSoftware />} />
          <Route path="/products/construction-management" element={<ConstructionManagement />} />
          <Route path="/services/it-solutions" element={<ITSolutions />} />
          <Route path="/services/academy" element={<Academy />} />
          <Route path="/services/bpo-services" element={<BPOServices />} />
          <Route path="/services/manpower-supply" element={<ManpowerSupply />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;