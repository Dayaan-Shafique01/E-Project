// Black Theme
var icon = document.getElementById("icon");
icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "../Images/other/sun.png";
    } else {
        icon.src = "../Images/other/moon.png";
    }
};

// Comparision
var product = [{
    "id": 0,
    "title": "",
    "price": "",
    "description": "",
    "brand": "",
    "image": ""
},

//  Products
// Dawlance Items
{
    "id": 1,
    "title": " Dawlance fridge",
    "price": " 185,000",
    "description": "Cooling Technology:Direct Cool<br>Product Color: Metallic Silver<br>External Handle:Assembled<br>Freezer Position:Top<br>Handle Material:Plastic<br>Type of Handle:Flush Handle<br>Type of Shelf: Wire<br>Refrigerator Light:LED on Ceiling<br>Total Shelves:3.",
    "brands": " Dawlance",
    "image": "DAWLANCE/Fridge/dawalance fridge 1.png"
},
{
    "id": 2,
    "title": " Dawlance washing machine",
    "price": " 93,900",
    "description": "Drum Type: Steel<br> Capacity: 12 kg<br> Maximum Spin Speed: Below 1000 RPM<br>12 kg Single Tub Spinner Dryer<br>Suitable for Home Appliances<br>Efficient and reliable performance",
    "brands": " Dawlance",
    "image": "DAWLANCE/washing/dawal machine 2.png"
},
{
    "id": 3,
    "title": " Dawlance LED",
    "price": " 40,999",
    "description": "Resolution: 1920 x 1080<br>sreen Type: Narrow Bezel (Frameless)<br>Turbo Sound:16<br> WHDMI:2<br>USB:1",
    "brands": " Dawlance",
    "image": "DAWLANCE/LED/dawal led 2.png"
},
{
    "id": 4,
    "title": " Dawlance iron",
    "price": " 9,200",
    "description": "1750W <br> Ceramic Sole Plate<br> 12g/min Steam rate<br>100g/min Shock Steam<br>220ml Capacity Water Tank<br> Anti Scale Design",
    "brands": " Dawlance",
    "image": "DAWLANCE/iron/dawal iron 2.png"
},
{
    "id": 5,
    "title": " Dawlance AC",
    "price": " 1,19,900",
    "description": "Heat & Cool: Yes<br>Auto Restart: Yes<br> Display: Hidden Display<br> Timer: Yes<br>Sleep Mode: Yes<br> Indoor Unit Cooling Operating Range (ÃÂÂ° C): 17 ~ 32<br>Condenser Fin: Golden Fin<br>EER: 3.21<br>Cooler liquid: R410a<br> Energy in Heating (W): 1100<br>Noise Level DB: 43",
    "brands": " Dawlance",
    "image": "DAWLANCE/AC/dawal ac 2.png"
},

// PEL Items
{
    "id": 6,
    "title": "Pel fridge",
    "price": " 50,700",
    "description": "Freezer 59Liters<br>Refrigerator 109Liters<br>Voltage/Frequency 220/50Volts/Hz<br>Power Consumption 115Watt<br>Current Consumption 0.85Ampere<br>Climate Class Tropical<br>Freezer Manual<br>Refrigerator Manual<br>Temperature Control (Adjustable) Mechanical<br>Crespo Tray Yes",
    "brands": "PEL",
    "image": " PEL/Fridge/pel fridge 2.png"
},
{
    "id": 7,
    "title": "Pel washing machine",
    "price": " 50,700",
    "description": "Washer + Spinner<br>High quality ratio<br>Low noise design<br>Quiet & stable<br>Plastic body<br>Rust free<br>Durable an temperature resistant<br>Watt: 220/240",
    "brands": "PEL",
    "image": " PEL/washing/pel mach 3.png"
},
{
    "id": 8,
    "title": "Pel LED",
    "price": " 35,999",
    "description": "SPECIFICATION32” HD LED TV<br> Screen Resolution720p<br> SoundDolby Digital<br>HDMI2<br> USB 2.01<br>Audio OutYes<br>AV In/OutYes<br>VGAYes<br> IPS DisplayYes<br>10+ Watt SpeakersYes",
    "brands": "PEL",
    "image": " PEL/LED/pel led 2.png"
},
{
    "id": 9,
    "title": "Pel iron",
    "price": " 6,500",
    "description": "2600 W power<br>45 g/min continuous steam<br>200 g steam boost<br> SteamGlide Plus",
    "brands": "PEL",
    "image": " PEL/iron/pel iron 3.png"
},
{
    "id": 10,
    "title": "Pel AC",
    "price": " 1,10,000",
    "description": "SPECIFICATION18K Jumbo DC Prime<br>  80% Energy Saving<br>  Rated Capacity - Cooling5300(1800-5800) W<br>Rated Running Current - Cooling7.5(2.4-10) A<br> Maximum Current10.5 A<br> Rated Power Cooling1560(450-2200) W<br> Maximum Power2300 W<br>Seasonal / Energy Efficiency Ratio (SEER/EER)3.5 W/W",
    "brands": "PEL",
    "image": " PEL/AC/pel ac 5.png"
},

// Orient Items
{
    "id": 11,
    "title": "orient fridge",
    "price": " 87,700",
    "description": "18 Min Instant Freeze<br>ECM technology<br>Deodorizer<br>Crystal Door PocketsLong LED Light<br> Roll Bond Evaporator<br> Thickset Insulation<br> Electricity consumption less than 1 unit a day<br>90 V Low voltage startup<br> Tougher Shelves<br>Food Grade ABS",
    "brands": " Orient",
    "image": " orient/Fridge/orient fridge 2.png"
},
{
    "id": 12,
    "title": "orient washing machine",
    "price": " 87,700",
    "description": "Washing Capacity: 8kg<br>  Spinning Capacity: 7kg<br>Shock & Rust Proof Plastic Body<br>Scrub Board with Double Strom Pulsator<br>Buzzer Sounds (End of Wash Cycle)<br>Gear Technology<br>Power Full Copper Motor <br>Quick Spinning",
    "brands": " Orient",
    "image": "orient/washing/orient mach 3.png"
},
{
    "id": 13,
    "title": "orient LED",
    "price": " 46,000",
    "description": "32 WXGA 1366x768<br> Direct LED Backlight<br>Easy color adjustment<br> Sound reflector<br> Antenna Booster<br> Antenna Booster<br>USB(Photo)",
    "brands": " Orient",
    "image": "orient/LED/orient led 3.png"
},
{
    "id": 14,
    "title": "orient iron",
    "price": " 8,500",
    "description": "Brand Warranty<br>Durability<br>Heat-Resistant Cotton Cord<br> Easy Operation 6 Temperate<br> 1000 W<br>Heavy weight<br>Non Stick Coated Soleplate<br>Big Fabric Guide",
    "brands": " Orient",
    "image": "orient/iron/orient iron 3.png"
},
{
    "id": 15,
    "title": "orient AC",
    "price": " 1,40,000",
    "description": "Seamless Design With Double Air Deflector<br>Auto Clean Function <br> 4 Way Airflow<br>Seven Fan Speed<br>Single Panel Easy Clean Filter<br> Health Filters<br> European Complaint Heat & Cool AC<br>Low Noise Operation<br>  Latest Powerful G-10 AC<br> Energy Efficiency Class A+ (Upto 60% Energy Saving)<br>Low Voltage Startup – 150V<br>Ultra Low Frequency Torque Control<br> State-Of-The-Art DSP Chip",
    "brands": " Orient",
    "image": "orient/AC/orient ac 3.png"
},

// Kenwood Items
{
    "id": 16,
    "title": " Kenwood fridge",
    "price": " 70,700",
    "description": "Product Brand: CHiQ<br>Digital Inverter Refrigerator<br>Luxury Tempered Glass Door withEdge Cutting Technology<br>4D DC Inverter Refrigerator<br>Touch Control Display<br>06 Ways Cooling Technology<br>-32° C Cooling Technology",
    "brands": " Kenwood",
    "image": " Kenwood/Fridge/kenwood fridge 1.png"
},
{
    "id": 17,
    "title": " Kenwood washing machine",
    "price": " 94,900",
    "description": "Brand warranty<br>Easy to use<br> Durable<br>Heavy duty<br>8Kg washing capacity<br>Built-in buzzer<br>Full plastic body",
    "brands": " Kenwood",
    "image": " Kenwood/washing/kenwood mach 4.png"
},
{
    "id": 18,
    "title": " Kenwood LED",
    "price": " 45,000",
    "description": "Resolution: 4K Ultra HD (3840 x 2160) | Refresh Rate: 60 Hertz 178 Degree wide viewing angle<br>Connectivity: 3 HDMI ports to connect set top box, Blu Ray players, gaming console | 2 USB ports to connect hard drives and other USB devices",
    "brands": " Kenwood",
    "image": " Kenwood/LED/kenwood led 5.png"
},
{
    "id": 19,
    "title": " Kenwood iron",
    "price": " 7,499",
    "description": "Input voltage 100-240 V<br>Iron Type Dry Iron <br>Spray No<br>Temparature Control Yes Soleplate Type Coated non-stick<br> Wattage 1000W<br>Indicator Light(s)  Yes",
    "brands": " Kenwood",
    "image": " Kenwood/iron/kenwood iron 4.png"
},
{
    "id": 20,
    "title": " Kenwood AC",
    "price": " 1,26,900",
    "description": "Up to 75% energy efficient<br>Golden fins<br> Sleep Mode.<br> 4 year PCB Warranty.<br>10 Year nationwide warranty.<br>Heat and cool function.<br>  100% copper pipe.<br> UVC light Ensures Bacteria Free Clean Air. Antirust Coating.<br>24hr timer.<br>Powerful air flow.<br> Inner-Grooved Copper tube.<br>Turbo cool.<br>Eco-Friendly R410 Gas.<br> Low voltage operate (145V-26",
    "brands": " Kenwood",
    "image": " Kenwood/AC/kenwood ac 3.png"
},

// Haier Items
{
    "id": 21,
    "title": " Haier fridge",
    "price": " 99,999",
    "description": "Brand Warranty<br>10 Years Compressor Warranty<br>Less than 1 Unit a day<br> Antibacterial Technology<br>ABT Sterilization<br>FD Inverter <br>Blue Turbo Cooling<br>Digital Control System<br>4 Temperature Sensors<br>Fastest Freshness Cooling<br> Antibacterial Technology<br> A+ Inverter Compressor",
    "brands": " Haier",
    "image": " Haier/Fridge/haier fridge 1.png"
},
{
    "id": 22,
    "title": " Haier washing machine",
    "price": " 98,999",
    "description": "RPM:1330<br>Strong 6 kg spinning capacity<br> Shock Proof<br>10 Minutes Spinning Time<br>Compact Design<br>Transparent Top Cover<br> Plastic Body<br> 99.99% Copper Motor ",
    "brands": " Haier",
    "image": " Haier/washing/haier machine 2.png"
},
{
    "id": 23,
    "title": " Haier LED",
    "price": " 54,999",
    "description": "Size: 32 <br> Panel Type: DLED<br> System of Analog TV（VIDEO/AUDIO): PAL/BG<br> Connected TV: YES<br> Type: H-Cast Series<br>Aspect Ratio: 16:9<br>Resolutions: 1366*768 ",
    "brands": " Haier",
    "image": " Haier/LED/haier led 2.png"
},
{
    "id": 24,
    "title": " Haier iron",
    "price": " 6,500",
    "description": "Input voltage Not Specified <br>Iron Type Dry Iron<br>Spray  No<br>  Temparature Control Yes<br>Soleplate Type Coated non-stick<br?Wattage 1000W<br> Indicator Light(s) Yes ",
    "brands": " Haier",
    "image": " Haier/iron/haier iron 4.png"
},
{
    "id": 25,
    "title": " Haier AC",
    "price": " 169,999",
    "description": "Brand Warranty<br> 10 Years Compressor Warranty<br>Optional Wifi<br> R32 Refrigerant<br> Voltage 150-260v<br>  Running Current (A) 2.6 - 6.7<br>Indoor Dimensions W*D*H : 865*290*200<br> Outdoor Dimensions W*D*H : 720*295*550<br>Self Cleaning<br>Strong Airflow ",
    "brands": " Haier",
    "image": " Haier/AC/haier ac 3.png"
}];
