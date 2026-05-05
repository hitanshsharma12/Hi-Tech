"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft, 
  Globe, 
  Lock, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  XCircle, 
  Calendar,
  CreditCard,
  ExternalLink,
  Search,
  Filter
} from "lucide-react";

// Client websites data with passcodes
const clientWebsites = [
  {
    id: "cafe98",
    name: "Cafe 98",
    owner: "Anand Dhindwan",
    website: "https://cafe-98.vercel.app/",
    image: "/cafe98.jpg",
    passcode: "cafe98",
    monthlyCharge: 1500,
    isPaid: true,
    lastPayment: "2024-01-15",
    nextDue: "2024-02-15",
    status: "Active",
    category: "Hospitality",
    visitors: "2.5K",
    description: "Modern cafe website with WhatsApp ordering system",
  },
  {
    id: "yumigo",
    name: "YumiGo Bakery",
    owner: "Yumi Team",
    website: "https://yumigo-mocha.vercel.app/",
    image: "/yumigo.jpg",
    passcode: "yumigo123",
    monthlyCharge: 2000,
    isPaid: true,
    lastPayment: "2024-01-10",
    nextDue: "2024-02-10",
    status: "Active",
    category: "Food & Beverage",
    visitors: "3.2K",
    description: "Premium bakery with custom cake builder",
  },
  {
    id: "sushnova",
    name: "Sushnova Salon",
    owner: "Sushma Sharma",
    website: "https://sushnova.vercel.app/",
    image: "/salon.jpg",
    passcode: "salon2024",
    monthlyCharge: 1800,
    isPaid: false,
    lastPayment: "2023-12-20",
    nextDue: "2024-01-20",
    status: "Active",
    category: "Beauty & Wellness",
    visitors: "1.8K",
    description: "Premium salon with appointment booking",
  },
  {
    id: "khopchah",
    name: "Khop-Chah HP10",
    owner: "Khopcha Team",
    website: "https://khop-chah.vercel.app/",
    image: "/cafe.jpg",
    passcode: "khopcha",
    monthlyCharge: 1200,
    isPaid: true,
    lastPayment: "2024-01-18",
    nextDue: "2024-02-18",
    status: "Active",
    category: "Hospitality",
    visitors: "1.5K",
    description: "Modern cafe website with smooth UI",
  },
  {
    id: "physique",
    name: "The Physique GYM",
    owner: "Himanshu",
    website: "https://physique-gym.vercel.app/",
    image: "/cafe98.jpg",
    passcode: "gym2024",
    monthlyCharge: 2500,
    isPaid: true,
    lastPayment: "2024-01-05",
    nextDue: "2024-02-05",
    status: "Active",
    category: "Fitness",
    visitors: "4.1K",
    description: "Complete gym management system",
  },
  {
    id: "pizzapoint",
    name: "Pizza Point",
    owner: "Amit Singh",
    website: "https://pizza-point.vercel.app/",
    image: "/yumigo.jpg",
    passcode: "pizza123",
    monthlyCharge: 1500,
    isPaid: false,
    lastPayment: "2023-12-25",
    nextDue: "2024-01-25",
    status: "Active",
    category: "Food & Beverage",
    visitors: "2.1K",
    description: "Online pizza ordering platform",
  },
];

type ClientWebsite = typeof clientWebsites[0];

export default function ClientHubPage() {
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedClient, setSelectedClient] = useState<ClientWebsite | null>(null);
  const [passcodeInput, setPasscodeInput] = useState("");
  const [showPasscode, setShowPasscode] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const categories = [...new Set(clientWebsites.map(c => c.category))];

  const filteredClients = clientWebsites.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         client.owner.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || client.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleVerify = () => {
    if (selectedClient && passcodeInput === selectedClient.passcode) {
      setIsVerified(true);
      setError("");
    } else {
      setError("Invalid passcode. Please try again.");
    }
  };

  const handleCloseModal = () => {
    setSelectedClient(null);
    setPasscodeInput("");
    setShowPasscode(false);
    setIsVerified(false);
    setError("");
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 glass">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link 
              href="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Back to Home</span>
            </Link>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
              <span className="text-accent font-bold text-lg">H</span>
            </div>
            <span className="font-bold text-xl text-foreground">Client Hub</span>
          </div>

          <div className="w-24" />
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-muted-foreground mb-6">
            <Globe className="w-4 h-4 text-accent" />
            Client Portal
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="gradient-text">Your Websites</span>
          </h1>
          
          <p className="text-muted-foreground max-w-xl mx-auto">
            Select your website and enter your passcode to view details, payment status, and analytics.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by name or owner..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-secondary/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                !selectedCategory
                  ? "bg-accent text-accent-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Websites Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClients.map((client, index) => (
            <motion.button
              key={client.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedClient(client)}
              className="group text-left glass rounded-2xl overflow-hidden hover-glow transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={client.image}
                  alt={client.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                
                {/* Status badge */}
                <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${
                  client.isPaid 
                    ? "bg-green-500/20 text-green-400" 
                    : "bg-red-500/20 text-red-400"
                }`}>
                  {client.isPaid ? (
                    <>
                      <CheckCircle2 className="w-3 h-3" />
                      Paid
                    </>
                  ) : (
                    <>
                      <XCircle className="w-3 h-3" />
                      Unpaid
                    </>
                  )}
                </div>

                {/* Category badge */}
                <div className="absolute top-3 left-3 px-3 py-1 glass-light rounded-full text-xs font-medium text-foreground">
                  {client.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-lg text-foreground group-hover:text-accent transition-colors">
                    {client.name}
                  </h3>
                  <Lock className="w-5 h-5 text-muted-foreground shrink-0" />
                </div>

                <p className="text-sm text-muted-foreground mb-3">
                  {client.description}
                </p>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    Owner: {client.owner}
                  </span>
                  <span className="text-accent font-medium">
                    View Details →
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {filteredClients.length === 0 && (
          <div className="text-center py-20">
            <Globe className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No websites found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>

      {/* Passcode Modal */}
      <AnimatePresence>
        {selectedClient && !isVerified && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="glass rounded-2xl p-6 md:p-8 w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  {selectedClient.name}
                </h2>
                <p className="text-muted-foreground text-sm">
                  Enter your passcode to access website details
                </p>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <input
                    type={showPasscode ? "text" : "password"}
                    placeholder="Enter passcode"
                    value={passcodeInput}
                    onChange={(e) => {
                      setPasscodeInput(e.target.value);
                      setError("");
                    }}
                    onKeyDown={(e) => e.key === "Enter" && handleVerify()}
                    className="w-full px-4 py-4 bg-secondary/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPasscode(!showPasscode)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPasscode ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>

                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm text-center"
                  >
                    {error}
                  </motion.p>
                )}

                <button
                  onClick={handleVerify}
                  className="w-full bg-accent text-accent-foreground py-4 rounded-xl font-semibold hover:bg-accent/90 transition-all hover:scale-[1.02]"
                >
                  Verify & Access
                </button>

                <button
                  onClick={handleCloseModal}
                  className="w-full text-muted-foreground py-2 text-sm hover:text-foreground transition-colors"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Details Modal (after verification) */}
      <AnimatePresence>
        {selectedClient && isVerified && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="glass rounded-2xl w-full max-w-2xl my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header image */}
              <div className="relative h-48 overflow-hidden rounded-t-2xl">
                <Image
                  src={selectedClient.image}
                  alt={selectedClient.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                <div className="absolute bottom-4 left-6 right-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {selectedClient.name}
                  </h2>
                  <p className="text-muted-foreground">
                    Owner: {selectedClient.owner}
                  </p>
                </div>

                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 w-10 h-10 glass rounded-full flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
                >
                  <XCircle className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 space-y-6">
                {/* Payment Status Banner */}
                <div className={`p-4 rounded-xl flex items-center justify-between ${
                  selectedClient.isPaid 
                    ? "bg-green-500/10 border border-green-500/20" 
                    : "bg-red-500/10 border border-red-500/20"
                }`}>
                  <div className="flex items-center gap-3">
                    {selectedClient.isPaid ? (
                      <CheckCircle2 className="w-8 h-8 text-green-400" />
                    ) : (
                      <XCircle className="w-8 h-8 text-red-400" />
                    )}
                    <div>
                      <h4 className={`font-semibold ${
                        selectedClient.isPaid ? "text-green-400" : "text-red-400"
                      }`}>
                        {selectedClient.isPaid ? "Payment Up to Date" : "Payment Pending"}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {selectedClient.isPaid 
                          ? `Last payment: ${selectedClient.lastPayment}` 
                          : `Due since: ${selectedClient.nextDue}`
                        }
                      </p>
                    </div>
                  </div>
                  
                  {!selectedClient.isPaid && (
                    <a
                      href="https://wa.me/917018796714"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600 transition-colors"
                    >
                      Pay Now
                    </a>
                  )}
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-secondary/50 rounded-xl p-4 text-center">
                    <CreditCard className="w-6 h-6 text-accent mx-auto mb-2" />
                    <div className="text-xl font-bold text-foreground">
                      ₹{selectedClient.monthlyCharge}
                    </div>
                    <div className="text-xs text-muted-foreground">Monthly Charge</div>
                  </div>

                  <div className="bg-secondary/50 rounded-xl p-4 text-center">
                    <Globe className="w-6 h-6 text-accent mx-auto mb-2" />
                    <div className="text-xl font-bold text-foreground">
                      {selectedClient.visitors}
                    </div>
                    <div className="text-xs text-muted-foreground">Monthly Visitors</div>
                  </div>

                  <div className="bg-secondary/50 rounded-xl p-4 text-center">
                    <Calendar className="w-6 h-6 text-accent mx-auto mb-2" />
                    <div className="text-xl font-bold text-foreground">
                      {selectedClient.nextDue}
                    </div>
                    <div className="text-xs text-muted-foreground">Next Due</div>
                  </div>

                  <div className="bg-secondary/50 rounded-xl p-4 text-center">
                    <CheckCircle2 className="w-6 h-6 text-accent mx-auto mb-2" />
                    <div className="text-xl font-bold text-foreground">
                      {selectedClient.status}
                    </div>
                    <div className="text-xs text-muted-foreground">Status</div>
                  </div>
                </div>

                {/* Website Link */}
                <div className="bg-secondary/50 rounded-xl p-4">
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Website URL</h4>
                  <a
                    href={selectedClient.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent hover:underline"
                  >
                    {selectedClient.website}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Description */}
                <div className="bg-secondary/50 rounded-xl p-4">
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Description</h4>
                  <p className="text-foreground">{selectedClient.description}</p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={selectedClient.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-xl transition-all hover:bg-accent/90"
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="https://wa.me/917018796714"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 glass text-foreground font-semibold rounded-xl transition-all hover:bg-secondary"
                  >
                    Contact Support
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
