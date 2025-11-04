// knowledge-base.js – Comprehensive Knowledge Base for First Choice Tents & Aluminium Fabrication
// Categories: Tent Products (15), Aluminium Products (15), Pricing (10), Installation (8), Warranty (7), Locations (5), General (Default)

const knowledgeBase = {

    /* ================================
       🏕️ TENT PRODUCTS (15)
    ================================= */
    'tent-types': {
        category: 'Tent Products',
        keywords: ['tent types', 'kinds of tents', 'what tents', 'tent options', 'tent varieties'],
        response: `We manufacture various tent types for all occasions:
• Wedding Marquees
• Corporate Event Tents
• Party & Festival Tents
• Exhibition & Trade Show Shelters
• Storage & Industrial Tents
• Car Parking & Shade Tents
All our tents are made from UV-protected PVC fabric with strong steel or aluminium frames.`
    },

    'tent-sizes': {
        category: 'Tent Products',
        keywords: ['tent sizes', 'size options', 'dimensions', 'how big', 'measurements'],
        response: `Our tents come in customizable sizes:
• 3x3m (small gatherings)
• 5x10m (medium events)
• 10x20m (weddings & exhibitions)
• 20x40m+ (large functions)
We can also design tents based on capacity — 50, 100, 300, 500+ guests.`
    },

    'wedding-tents': {
        category: 'Tent Products',
        keywords: ['wedding', 'marriage', 'ceremony', 'reception', 'bridal', 'groom'],
        response: `Our wedding tents are elegant, weather-resistant, and come with optional décor services:
• Sizes for 50–500+ guests
• Optional lining, lighting, flooring & draping
• Custom white, gold, or themed color options
• Available for sale or long-term rental`
    },

    'event-tents': {
        category: 'Tent Products',
        keywords: ['event', 'corporate', 'party', 'exhibition', 'festival', 'concert'],
        response: `We design professional-grade event tents ideal for corporate launches, exhibitions, and festivals.
• Heavy-duty aluminium frames
• Quick setup modular sections
• Branding and printing available
• Optional air-cooling and flooring systems`
    },

    'storage-tents': {
        category: 'Tent Products',
        keywords: ['storage', 'warehouse', 'industrial tent', 'stock', 'goods shelter'],
        response: `Our storage tents provide affordable temporary warehouses:
• Industrial-strength frames
• Wind & rain resistant covers
• Lockable entry points
• Perfect for agro-produce, equipment, or construction storage.`
    },

    'carports': {
        category: 'Tent Products',
        keywords: ['carport', 'vehicle shade', 'parking tent', 'garage tent'],
        response: `We fabricate stylish and durable carports:
• Steel or aluminium frames
• UV & rust-resistant shade fabric
• Single or double vehicle designs
• Ideal for homes, institutions, or offices`
    },

    'custom-tents': {
        category: 'Tent Products',
        keywords: ['custom tent', 'bespoke tent', 'tailored tent', 'special tent'],
        response: `Need something unique? We offer fully customized tent solutions:
• Shape, size, and color of your choice
• Custom logo or branding print
• Design-to-delivery within 7–14 days`
    },

    'tent-materials': {
        category: 'Tent Products',
        keywords: ['tent material', 'fabric', 'cover type', 'pvc', 'canvas'],
        response: `We use premium 750gsm–900gsm PVC-coated polyester fabric that is:
• Waterproof
• UV-resistant
• Flame retardant
• Easy to clean and maintain`
    },

    'tent-lifespan': {
        category: 'Tent Products',
        keywords: ['tent last', 'durability', 'lifespan', 'long lasting'],
        response: `Our tents are engineered for durability:
• Average lifespan: 5–10 years
• Aluminium frames last over a decade
• Regular cleaning and storage can extend life further`
    },

    'tent-color': {
        category: 'Tent Products',
        keywords: ['tent color', 'colour options', 'design style'],
        response: `We provide tents in standard white, cream, blue, green, grey, and custom colors on request. Branding with logos or text is also available.`
    },

    'tent-hire': {
        category: 'Tent Products',
        keywords: ['hire', 'rent', 'lease tent'],
        response: `Yes! We offer rental services for events:
• Daily, weekly, or monthly rates
• Installation and dismantling included
• Ideal for weddings, exhibitions, or campaigns`
    },

    'tent-maintenance': {
        category: 'Tent Products',
        keywords: ['maintain tent', 'repair tent', 'clean tent'],
        response: `We provide maintenance and repair for all tent types:
• PVC patching & seam fixing
• Frame alignment
• Replacement panels & accessories`
    },

    'tent-branding': {
        category: 'Tent Products',
        keywords: ['branding', 'logo', 'printed tent', 'advert tent'],
        response: `We print logos and designs directly onto tent fabric using UV-stable inks. Perfect for company promotions, NGO events, or political campaigns.`
    },

    'tent-accessories': {
        category: 'Tent Products',
        keywords: ['tent accessories', 'lights', 'flooring', 'chairs', 'decor'],
        response: `We provide tent accessories such as flooring, chairs, carpets, lights, draping, and stage setups upon request.`
    },

    'tent-delivery': {
        category: 'Tent Products',
        keywords: ['tent delivery', 'shipping', 'transport tent'],
        response: `We deliver and install tents anywhere in Uganda and across East Africa through our Mukono and Arua branches.`
    },


    /* ================================
       🪟 ALUMINIUM PRODUCTS (15)
    ================================= */
    'aluminium-types': {
        category: 'Aluminium Products',
        keywords: ['aluminium', 'aluminum', 'doors', 'windows', 'glass', 'shop front', 'partition'],
        response: `We fabricate aluminium:
• Sliding and hinged doors
• Fixed and louvered windows
• Shop fronts and glass facades
• Office partitions and custom fittings`
    },

    'aluminium-frames': {
        category: 'Aluminium Products',
        keywords: ['frames', 'door frame', 'window frame'],
        response: `Our aluminium frames are powder-coated for durability and available in silver, bronze, black, or white finishes.`
    },

    'glass-partitions': {
        category: 'Aluminium Products',
        keywords: ['glass partition', 'office partition', 'divider'],
        response: `We install modern glass office partitions with aluminium framing—ideal for offices, banks, and institutions.`
    },

    'shop-fronts': {
        category: 'Aluminium Products',
        keywords: ['shop front', 'store front', 'display glass'],
        response: `We build attractive aluminium shop fronts with tempered glass and sliding or hinged entry options.`
    },

    'balcony-rails': {
        category: 'Aluminium Products',
        keywords: ['balcony', 'railing', 'balustrade', 'guard'],
        response: `Our aluminium and stainless-steel balcony railings combine safety with modern aesthetics.`
    },

    'mosquito-nets': {
        category: 'Aluminium Products',
        keywords: ['mosquito net', 'screen window', 'insect guard'],
        response: `We install aluminium mosquito net frames with detachable mesh—protective and easy to clean.`
    },

    'roof-trusses': {
        category: 'Aluminium Products',
        keywords: ['roof', 'truss', 'frame structure'],
        response: `We design lightweight aluminium trusses for halls, stages, and exhibition setups.`
    },

    'curtain-walls': {
        category: 'Aluminium Products',
        keywords: ['curtain wall', 'facade', 'building glass'],
        response: `Curtain wall glazing systems offer a professional finish for buildings. We customize them for your architecture.`
    },

    'door-handles': {
        category: 'Aluminium Products',
        keywords: ['handle', 'door accessories', 'lockset'],
        response: `We provide quality handles, locks, and door closers for all aluminium installations.`
    },

    'showroom': {
        category: 'Aluminium Products',
        keywords: ['showroom', 'visit', 'display'],
        response: `Visit our Mukono showroom to see live samples of windows, doors, and frames before placing your order.`
    },

    'aluminium-color': {
        category: 'Aluminium Products',
        keywords: ['color', 'finish', 'powder coating'],
        response: `Choose from silver, black, bronze, champagne, or white powder-coated finishes. Custom RAL colors available.`
    },

    'double-glazing': {
        category: 'Aluminium Products',
        keywords: ['double glass', 'insulated glass', 'soundproof window'],
        response: `We offer energy-efficient double-glazed glass for sound insulation and thermal performance.`
    },

    'door-types': {
        category: 'Aluminium Products',
        keywords: ['door type', 'door options'],
        response: `We fabricate:
• Sliding doors
• Folding doors
• Casement & hinged doors
• Automatic sensor doors (on order)`
    },

    'partition-cost': {
        category: 'Aluminium Products',
        keywords: ['partition cost', 'glass partition price'],
        response: `Standard partition pricing starts at UGX 150,000 per square meter including labour and fittings.`
    },

    'aluminium-delivery': {
        category: 'Aluminium Products',
        keywords: ['aluminium delivery', 'install door', 'fit windows'],
        response: `We deliver and install aluminium works anywhere in Uganda within 1–3 weeks depending on project size.`
    },


    /* ================================
       💰 PRICING (10)
    ================================= */
    'pricing': {
        category: 'Pricing',
        keywords: ['price', 'cost', 'how much', 'pricing', 'quote', 'estimate'],
        response: `Prices vary based on size and materials:
• Tents: from UGX 18,000 per m²
• Aluminium: from UGX 95,000 per m²
• Carports: from UGX 4,000,000
• Custom projects: quoted after design
For exact pricing, share your size and location for a free quote.`
    },

    'bulk-order': {
        category: 'Pricing',
        keywords: ['discount', 'bulk order', 'wholesale'],
        response: `Yes! We offer discounts for bulk or repeat customers—especially for event companies, NGOs, and institutions.`
    },

    'payment-methods': {
        category: 'Pricing',
        keywords: ['payment', 'mobile money', 'cash', 'bank'],
        response: `We accept:
• Mobile Money (MTN & Airtel)
• Bank transfers
• Cash payments at our offices
Receipts and invoices are provided for all transactions.`
    },

    'quote-request': {
        category: 'Pricing',
        keywords: ['quote', 'estimate', 'budget'],
        response: `You can request a quote directly through our website or WhatsApp. Provide size, location, and product type for a quick response.`
    },

    'currency': {
        category: 'Pricing',
        keywords: ['currency', 'usd', 'ugx', 'ksh', 'tzs'],
        response: `Our prices are in Ugandan Shillings (UGX). For regional clients, we can also quote in USD, KES, or TZS upon request.`
    },

    'delivery-cost': {
        category: 'Pricing',
        keywords: ['delivery cost', 'transport fee', 'shipping'],
        response: `Delivery cost depends on distance. Within central Uganda is free for large orders; upcountry deliveries attract minimal transport fees.`
    },

    'installation-cost': {
        category: 'Pricing',
        keywords: ['installation fee', 'labour cost'],
        response: `Installation cost is usually included in project pricing unless otherwise specified.`
    },

    'rental-cost': {
        category: 'Pricing',
        keywords: ['rental price', 'hire cost', 'tent hire cost'],
        response: `Rental tent prices range between UGX 500,000 – 5,000,000 depending on size, décor, and duration.`
    },

    'refunds': {
        category: 'Pricing',
        keywords: ['refund', 'cancellation', 'deposit'],
        response: `Deposits are non-refundable after production starts. However, we can adjust dates or project scope if informed early.`
    },

    'quotation-time': {
        category: 'Pricing',
        keywords: ['how long quote', 'time for quote', 'quote ready'],
        response: `Quotes are usually prepared within 1–3 business hours after we receive all project details.`
    },


    /* ================================
       🛠️ INSTALLATION (8)
    ================================= */
    'installation': {
        category: 'Installation',
        keywords: ['install', 'installation', 'setup', 'deliver', 'nationwide'],
        response: `We install across Uganda through our professional field teams. Typical timelines:
• Tents: 1–3 days
• Aluminium: 1–3 weeks
• Custom projects: up to 4 weeks`
    },

    'site-prep': {
        category: 'Installation',
        keywords: ['site', 'ground', 'prepare', 'level'],
        response: `Before installation, ensure the site is level and accessible. We can also provide site preparation assistance on request.`
    },

    'installation-team': {
        category: 'Installation',
        keywords: ['technicians', 'installers', 'workers'],
        response: `Our installation teams are experienced professionals supervised by project managers for quality and safety assurance.`
    },

    'after-installation': {
        category: 'Installation',
        keywords: ['after install', 'post install', 'inspection'],
        response: `After installation, we inspect all joints, test stability, and ensure full satisfaction before handover.`
    },

    'installation-areas': {
        category: 'Installation',
        keywords: ['service area', 'coverage', 'countrywide'],
        response: `We cover all districts in Uganda and nearby countries such as Kenya, South Sudan, and DRC.`
    },

    'delivery-tracking': {
        category: 'Installation',
        keywords: ['track delivery', 'track installation'],
        response: `Our dispatch team provides live updates through WhatsApp and phone once your delivery is en route.`
    },

    'installation-warranty': {
        category: 'Installation',
        keywords: ['installation warranty', 'installation guarantee'],
        response: `All installations are covered by a workmanship warranty of up to 12 months.`
    },

    'installation-appointment': {
        category: 'Installation',
        keywords: ['schedule installation', 'appointment', 'book installation'],
        response: `You can schedule your installation by calling +256 706 028 299 or emailing firstchoicetents2025@gmail.com`
    },


    /* ================================
       🧾 WARRANTY (7)
    ================================= */
    'warranty': {
        category: 'Warranty',
        keywords: ['warranty', 'guarantee', 'maintenance', 'quality', 'durability'],
        response: `Our warranties cover:
• Tents: 1–5 years
• Aluminium: 5–10 years
We guarantee workmanship and offer maintenance services upon request.`
    },

    'claim-process': {
        category: 'Warranty',
        keywords: ['claim', 'warranty process', 'report issue'],
        response: `To claim warranty, contact us with your purchase details and photos. We respond within 24 hours.`
    },

    'maintenance': {
        category: 'Warranty',
        keywords: ['maintenance', 'cleaning', 'care'],
        response: `Routine cleaning with mild detergent extends product life. Avoid sharp objects and acid-based cleaners.`
    },

    'spare-parts': {
        category: 'Warranty',
        keywords: ['spare parts', 'replacement', 'component'],
        response: `We provide replacement tent panels, zippers, poles, and aluminium parts for all our installations.`
    },

    'extended-warranty': {
        category: 'Warranty',
        keywords: ['extended warranty', 'extra warranty'],
        response: `You can purchase extended warranties for up to 10 years on premium aluminium installations.`
    },

    'quality-check': {
        category: 'Warranty',
        keywords: ['quality check', 'testing', 'inspection'],
        response: `All products go through strength and quality inspection before delivery. Certificates available on request.`
    },

    'certifications': {
        category: 'Warranty',
        keywords: ['certificate', 'quality certificate'],
        response: `Our materials meet ISO and East African quality standards for safety and durability.`
    },


    /* ================================
       📍 LOCATIONS (5)
    ================================= */
    'locations': {
        category: 'Locations',
        keywords: ['location', 'where', 'address', 'branch'],
        response: `📍 Head Office: Mukono, Opposite BE Energy Petrol Station, next to Jobia Hotel\n📍 Branch: Arua City, Baluku Cell, next to Arua Primary School\nWe serve clients across Uganda & East Africa.`
    },

    'contact-hours': {
        category: 'Locations',
        keywords: ['open hours', 'working time', 'availability'],
        response: `Our offices are open Monday–Saturday, 8:00 AM – 6:00 PM. Sundays are available for scheduled deliveries only.`
    },

    'directions': {
        category: 'Locations',
        keywords: ['direction', 'how to get', 'map'],
        response: `Mukono Office is along Jinja Road, opposite BE Energy Station. You can find us easily on Google Maps: “First Choice Tents Uganda.”`
    },

    'service-area': {
        category: 'Locations',
        keywords: ['service area', 'coverage', 'serve regions'],
        response: `We serve all major towns in Uganda — Kampala, Jinja, Mbarara, Gulu, Arua, Mbale, and beyond. We also export to South Sudan and DRC.`
    },

    'contact-info': {
        category: 'Locations',
        keywords: ['contact info', 'phone', 'email'],
        response: `📞 +256 706 028 299 / +256 787 028 099\n📧 firstchoicetents2025@gmail.com\n💬 WhatsApp available 24/7`
    },


    /* ================================
       💬 DEFAULT RESPONSE
    ================================= */
    'default': {
        category: 'General',
        keywords: [],
        response: `I'm here to assist with:
• Tent products and sizing
• Aluminium works and installations
• Quotes and pricing
• Deliveries and warranties
Could you please tell me more about your project?`
    }
};
