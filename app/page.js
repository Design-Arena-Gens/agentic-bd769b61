'use client'
import { useState } from 'react'

const vendors = [
  {
    id: 1,
    name: "Haji Saheb's Fuchka Corner",
    location: "Dhanmondi 27, Dhaka",
    specialty: "Fuchka (Pani Puri)",
    rating: 4.8,
    priceRange: "৳10-30",
    timings: "4 PM - 11 PM",
    famous: "Extra spicy tamarind water",
    area: "Dhaka",
    category: "Fuchka"
  },
  {
    id: 2,
    name: "Rashid's Jhalmuri Stall",
    location: "New Market, Dhaka",
    specialty: "Jhalmuri",
    rating: 4.6,
    priceRange: "৳20-40",
    timings: "3 PM - 10 PM",
    famous: "Mixed with fresh cucumber & chanachur",
    area: "Dhaka",
    category: "Jhalmuri"
  },
  {
    id: 3,
    name: "Mama's Chotpoti Stand",
    location: "TSC, Dhaka University",
    specialty: "Chotpoti",
    rating: 4.9,
    priceRange: "৳30-50",
    timings: "2 PM - 9 PM",
    famous: "University students' favorite",
    area: "Dhaka",
    category: "Chotpoti"
  },
  {
    id: 4,
    name: "Khoka's Shingara",
    location: "Elephant Road, Dhaka",
    specialty: "Shingara & Samosa",
    rating: 4.7,
    priceRange: "৳10-25",
    timings: "6 AM - 8 PM",
    famous: "Fresh morning shingara",
    area: "Dhaka",
    category: "Shingara"
  },
  {
    id: 5,
    name: "Habib's Borhani & Kebab",
    location: "Nawabpur Road, Dhaka",
    specialty: "Kebab Rolls",
    rating: 4.5,
    priceRange: "৳80-150",
    timings: "5 PM - 12 AM",
    famous: "Spicy beef kebab with mint chutney",
    area: "Dhaka",
    category: "Kebab"
  },
  {
    id: 6,
    name: "Mina's Pitha Stall",
    location: "Shahbag, Dhaka",
    specialty: "Traditional Pitha",
    rating: 4.8,
    priceRange: "৳25-60",
    timings: "Morning & Evening",
    famous: "Bhapa pitha & chitoi pitha",
    area: "Dhaka",
    category: "Pitha"
  },
  {
    id: 7,
    name: "Kazi's Lassi Corner",
    location: "Gulshan 1, Dhaka",
    specialty: "Lassi & Borhani",
    rating: 4.4,
    priceRange: "৳40-80",
    timings: "10 AM - 10 PM",
    famous: "Thick creamy mango lassi",
    area: "Dhaka",
    category: "Drinks"
  },
  {
    id: 8,
    name: "Jalal's Halim House",
    location: "Chawk Bazar, Dhaka",
    specialty: "Halim",
    rating: 4.9,
    priceRange: "৳100-200",
    timings: "Ramadan Special",
    famous: "50 years old recipe",
    area: "Dhaka",
    category: "Halim"
  },
  {
    id: 9,
    name: "Rina's Ghugni Stall",
    location: "Mirpur 10, Dhaka",
    specialty: "Ghugni",
    rating: 4.3,
    priceRange: "৳20-40",
    timings: "4 PM - 10 PM",
    famous: "Yellow peas ghugni with egg",
    area: "Dhaka",
    category: "Ghugni"
  },
  {
    id: 10,
    name: "Sultan's Cha Stall",
    location: "Banani, Dhaka",
    specialty: "Tea & Biscuits",
    rating: 4.6,
    priceRange: "৳10-30",
    timings: "6 AM - 11 PM",
    famous: "7-color tea",
    area: "Dhaka",
    category: "Tea"
  },
  {
    id: 11,
    name: "Babu's Doi & Mishti",
    location: "Farmgate, Dhaka",
    specialty: "Doi (Yogurt)",
    rating: 4.7,
    priceRange: "৳50-100",
    timings: "9 AM - 9 PM",
    famous: "Bogra doi & roshogolla",
    area: "Dhaka",
    category: "Sweets"
  },
  {
    id: 12,
    name: "Alamgir's Chatpati",
    location: "Uttara, Dhaka",
    specialty: "Chatpati",
    rating: 4.5,
    priceRange: "৳30-50",
    timings: "3 PM - 10 PM",
    famous: "Extra crispy papdi",
    area: "Dhaka",
    category: "Chatpati"
  },
  {
    id: 13,
    name: "Rahim Fuchka Wala",
    location: "Agrabad, Chittagong",
    specialty: "Fuchka",
    rating: 4.9,
    priceRange: "৳15-35",
    timings: "4 PM - 11 PM",
    famous: "Chittagong style fuchka",
    area: "Chittagong",
    category: "Fuchka"
  },
  {
    id: 14,
    name: "Noor's Mezban Meat",
    location: "Anderkilla, Chittagong",
    specialty: "Mezban (Beef Curry)",
    rating: 5.0,
    priceRange: "৳150-250",
    timings: "Lunch Hours",
    famous: "Authentic Chittagong mezban",
    area: "Chittagong",
    category: "Mezban"
  },
  {
    id: 15,
    name: "Hafez's Luchi Alur Dom",
    location: "Court Road, Sylhet",
    specialty: "Luchi & Alur Dom",
    rating: 4.8,
    priceRange: "৳40-70",
    timings: "7 AM - 11 AM",
    famous: "Breakfast special",
    area: "Sylhet",
    category: "Breakfast"
  }
]

const areas = ["All Areas", "Dhaka", "Chittagong", "Sylhet"]
const categories = ["All Categories", "Fuchka", "Jhalmuri", "Chotpoti", "Shingara", "Kebab", "Pitha", "Drinks", "Halim", "Ghugni", "Tea", "Sweets", "Chatpati", "Mezban", "Breakfast"]

export default function Home() {
  const [selectedArea, setSelectedArea] = useState("All Areas")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredVendors = vendors.filter(vendor => {
    const matchesArea = selectedArea === "All Areas" || vendor.area === selectedArea
    const matchesCategory = selectedCategory === "All Categories" || vendor.category === selectedCategory
    const matchesSearch = searchQuery === "" ||
      vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vendor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vendor.location.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesArea && matchesCategory && matchesSearch
  })

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      {/* Header */}
      <header style={{
        background: 'rgba(255,255,255,0.95)',
        padding: '20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ margin: '0 0 5px 0', color: '#2d3748', fontSize: '28px' }}>
            🍜 Bangladesh Street Food Directory
          </h1>
          <p style={{ margin: 0, color: '#718096', fontSize: '14px' }}>
            Discover the best street food vendors across Bangladesh
          </p>
        </div>
      </header>

      {/* AdSense Banner - Top */}
      <div style={{
        background: '#fff',
        padding: '20px',
        textAlign: 'center',
        borderBottom: '1px solid #e2e8f0'
      }}>
        <div style={{
          background: '#f7fafc',
          padding: '60px 20px',
          border: '2px dashed #cbd5e0',
          borderRadius: '8px',
          color: '#a0aec0'
        }}>
          [Google AdSense Banner - 728x90]
        </div>
      </div>

      {/* Main Content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>

        {/* Search & Filters */}
        <div style={{
          background: 'white',
          padding: '30px',
          borderRadius: '15px',
          marginBottom: '30px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}>
          <h2 style={{ margin: '0 0 20px 0', color: '#2d3748' }}>Find Your Perfect Street Food</h2>

          <input
            type="text"
            placeholder="Search by name, food, or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '15px',
              fontSize: '16px',
              border: '2px solid #e2e8f0',
              borderRadius: '8px',
              marginBottom: '20px',
              boxSizing: 'border-box'
            }}
          />

          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: '200px' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: '#4a5568', fontWeight: '600' }}>
                Area:
              </label>
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px',
                  fontSize: '16px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  background: 'white'
                }}
              >
                {areas.map(area => (
                  <option key={area} value={area}>{area}</option>
                ))}
              </select>
            </div>

            <div style={{ flex: '1', minWidth: '200px' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: '#4a5568', fontWeight: '600' }}>
                Category:
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px',
                  fontSize: '16px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  background: 'white'
                }}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          <div style={{
            marginTop: '20px',
            padding: '15px',
            background: '#f7fafc',
            borderRadius: '8px',
            color: '#4a5568'
          }}>
            Showing {filteredVendors.length} vendor{filteredVendors.length !== 1 ? 's' : ''}
          </div>
        </div>

        {/* AdSense - Mid Content */}
        <div style={{
          background: '#fff',
          padding: '20px',
          marginBottom: '30px',
          borderRadius: '10px',
          textAlign: 'center'
        }}>
          <div style={{
            background: '#f7fafc',
            padding: '40px 20px',
            border: '2px dashed #cbd5e0',
            borderRadius: '8px',
            color: '#a0aec0'
          }}>
            [Google AdSense - 336x280]
          </div>
        </div>

        {/* Vendor Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '25px'
        }}>
          {filteredVendors.map(vendor => (
            <div key={vendor.id} style={{
              background: 'white',
              padding: '25px',
              borderRadius: '15px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'pointer',
              border: '2px solid transparent'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)'
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)'
              e.currentTarget.style.borderColor = '#667eea'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)'
              e.currentTarget.style.borderColor = 'transparent'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '15px' }}>
                <h3 style={{ margin: 0, color: '#2d3748', fontSize: '20px' }}>{vendor.name}</h3>
                <div style={{
                  background: '#48bb78',
                  color: 'white',
                  padding: '5px 12px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}>
                  ⭐ {vendor.rating}
                </div>
              </div>

              <div style={{ marginBottom: '12px' }}>
                <span style={{
                  background: '#667eea',
                  color: 'white',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '600'
                }}>
                  {vendor.specialty}
                </span>
              </div>

              <div style={{ color: '#4a5568', fontSize: '14px', lineHeight: '1.8' }}>
                <div style={{ marginBottom: '8px' }}>
                  📍 <strong>Location:</strong> {vendor.location}
                </div>
                <div style={{ marginBottom: '8px' }}>
                  💰 <strong>Price:</strong> {vendor.priceRange}
                </div>
                <div style={{ marginBottom: '8px' }}>
                  🕒 <strong>Timings:</strong> {vendor.timings}
                </div>
                <div style={{
                  marginTop: '12px',
                  padding: '10px',
                  background: '#fff5e6',
                  borderRadius: '6px',
                  borderLeft: '4px solid #f6ad55'
                }}>
                  <strong>Famous for:</strong> {vendor.famous}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredVendors.length === 0 && (
          <div style={{
            background: 'white',
            padding: '60px',
            borderRadius: '15px',
            textAlign: 'center',
            color: '#718096'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '20px' }}>🔍</div>
            <h3 style={{ margin: '0 0 10px 0', color: '#2d3748' }}>No vendors found</h3>
            <p>Try adjusting your search or filters</p>
          </div>
        )}

        {/* AdSense - Bottom */}
        <div style={{
          background: '#fff',
          padding: '20px',
          marginTop: '40px',
          borderRadius: '10px',
          textAlign: 'center'
        }}>
          <div style={{
            background: '#f7fafc',
            padding: '60px 20px',
            border: '2px dashed #cbd5e0',
            borderRadius: '8px',
            color: '#a0aec0'
          }}>
            [Google AdSense Banner - 728x90]
          </div>
        </div>

        {/* Additional Info Section */}
        <div style={{
          background: 'white',
          padding: '40px',
          borderRadius: '15px',
          marginTop: '40px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}>
          <h2 style={{ color: '#2d3748', marginBottom: '20px' }}>About Bangladesh Street Food</h2>
          <p style={{ color: '#4a5568', lineHeight: '1.8', marginBottom: '15px' }}>
            Bangladesh has one of the richest street food cultures in South Asia. From the iconic fuchka (pani puri)
            to the savory jhalmuri, street food is an integral part of Bangladeshi lifestyle. Our directory helps you
            discover authentic street food vendors across major cities.
          </p>
          <p style={{ color: '#4a5568', lineHeight: '1.8', marginBottom: '15px' }}>
            Whether you're a local looking for your next food adventure or a tourist wanting to experience authentic
            Bangladeshi flavors, this directory is your complete guide to the best street food experiences.
          </p>

          <h3 style={{ color: '#2d3748', marginTop: '30px', marginBottom: '15px' }}>Popular Street Foods:</h3>
          <ul style={{ color: '#4a5568', lineHeight: '2' }}>
            <li><strong>Fuchka:</strong> Crispy hollow puris filled with spicy tamarind water</li>
            <li><strong>Jhalmuri:</strong> Spicy puffed rice mixed with vegetables and sauces</li>
            <li><strong>Chotpoti:</strong> Spiced chickpeas topped with egg and tamarind sauce</li>
            <li><strong>Shingara:</strong> Bangladeshi samosas with spiced potato filling</li>
            <li><strong>Halim:</strong> Slow-cooked lentil and meat stew, Ramadan special</li>
          </ul>
        </div>

      </main>

      {/* Footer */}
      <footer style={{
        background: 'rgba(255,255,255,0.95)',
        padding: '30px 20px',
        marginTop: '60px',
        textAlign: 'center',
        color: '#718096'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ margin: '0 0 10px 0', fontSize: '14px' }}>
            © 2024 Bangladesh Street Food Directory. All rights reserved.
          </p>
          <p style={{ margin: 0, fontSize: '12px' }}>
            Discover, Explore, and Enjoy the Best Street Food in Bangladesh
          </p>
        </div>
      </footer>
    </div>
  )
}
