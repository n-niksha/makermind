const projects = [
    // ==========================================
    // USEFUL PROJECTS
    // ==========================================
    {
        id: "smart-plant",
        title: "AI-Powered Plant Guardian",
        category: "Useful",
        difficulty: 2,
        cost: "$30 - $50",
        time: "Weekend",
        tags: ["electronics", "coding", "3d-printer", "home", "bio-engineering"],
        description: "Stop killing your plants. This device monitors soil moisture, light, and temperature, and uses a simple AI model to tell you exactly what your plant needs.",
        wowFactor: "It speaks for the plant! You can even give your plant a personality.",
        skills: ["IoT Sensor Integration", "C++ / Arduino Programming", "3D Design & Printing", "Basic Plant Biology"],
        certification_abstract: "The builder demonstrated proficiency in IoT systems by integrating capacitive moisture sensors and DHT11 environmental sensors with an ESP32 microcontroller. They successfully calibrated sensor data and implemented a logic system to automate plant care notifications.",
        parts: ["ESP32 Microcontroller", "Capacitive Soil Moisture Sensor v1.2", "DHT11 Temperature/Humidity Sensor", "0.96 inch OLED Display (I2C)", "3D Printed Case (PLA/PETG)", "Jumper Wires (Female-Female)"],
        tools: ["Soldering Iron", "3D Printer", "Wire Strippers", "Hot Glue Gun"],
        instructions: [
            { step: "Sensor Prep", details: "Solder 30cm jumper wires to the ESP32, Moisture Sensor, and DHT11. IMPORTANT: Coat the top electronics of the moisture sensor with hot glue or conformal coating to prevent corrosion." },
            { step: "Circuit Assembly", details: "Connect VCC to 3.3V, GND to GND. Connect Moisture Signal to GPIO 34 (Analog), DHT11 Data to GPIO 4. Connect OLED SDA to GPIO 21, SCL to GPIO 22." },
            { step: "3D Printing", details: "Print the 'Pot_Hugger_Case.stl' with 20% infill. No supports needed if printed face down." },
            { step: "Firmware Upload", details: "Install the 'Adafruit_SSD1306' and 'DHT' libraries in Arduino IDE. Flash the 'PlantBot.ino' code. Verify Serial Monitor output shows valid sensor readings." },
            { step: "Calibration", details: "Place sensor in dry air. Record value (0%). Place in cup of water. Record value (100%). Update these thresholds in the code." }
        ]
    },
    {
        id: "macro-pad",
        title: "Custom Productivity Macro Pad",
        category: "Useful",
        difficulty: 2,
        cost: "$40",
        time: "Weekend",
        tags: ["electronics", "3d-printer", "soldering", "productivity"],
        description: "A dedicated keypad for your most-used shortcuts. Streamline video editing, coding, or streaming with satisfying mechanical switches.",
        wowFactor: "Completely custom layout and RGB lighting that reacts to your typing.",
        skills: ["PCB Wiring / Hand-wiring", "QMK/VIA Firmware Configuration", "CAD Enclosure Design", "Soldering"],
        certification_abstract: "This project involved designing and fabricating a custom human-interface device (HID). The maker successfully hand-wired a key matrix, configured QMK firmware for custom keymaps, and integrated the device into their productivity workflow.",
        parts: ["Arduino Pro Micro (5V/16MHz)", "Cherry MX or Gateron Switches (x6-12)", "DSA/SA Keycaps", "1N4148 Diodes (x12)", "3D Printed Case", "Micro USB Cable"],
        tools: ["Soldering Iron", "3D Printer", "Hot Glue Gun", "Wire Cutters"],
        instructions: [
            { step: "Layout Design", details: "Use keyboard-layout-editor.com to design your 3x3 or 4x4 grid. Export the raw data for the firmware builder." },
            { step: "Case Printing", details: "Print the switch plate (1.5mm thick) and the bottom case. Snap the switches into the plate firmly." },
            { step: "Matrix Wiring", details: "Solder a diode to the left pin of each switch (black band facing away). Connect all diodes in a row together. Connect all right pins in a column together." },
            { step: "Controller Hookup", details: "Wire each Row to a digital pin (e.g., 2, 3, 4) and each Column to a digital pin (e.g., 5, 6, 7) on the Pro Micro." },
            { step: "Firmware", details: "Use QMK Configurator. Select 'handwired/onekey'. Map your pins. Compile and flash the .hex file using QMK Toolbox." }
        ]
    },
    {
        id: "auto-blinds",
        title: "Retrofit Smart Blinds",
        category: "Useful",
        difficulty: 3,
        cost: "$25",
        time: "1 Day",
        tags: ["electronics", "3d-printer", "home-automation", "coding"],
        description: "Wake up to natural sunlight. A non-destructive motor add-on that turns your dumb blinds into smart blinds.",
        wowFactor: "Watching your blinds open automatically at sunrise is pure magic.",
        skills: ["Home Automation (ESPHome)", "Stepper Motor Control", "Mechanical Coupling Design", "WiFi Networking"],
        certification_abstract: "The maker engineered a retrofit solution for home automation, successfully coupling a stepper motor to an existing mechanical system. They utilized an ESP8266 to bridge the physical hardware with a Home Assistant server via WiFi.",
        parts: ["28BYJ-48 Stepper Motor", "ULN2003 Motor Driver Board", "ESP8266 (NodeMCU or D1 Mini)", "3D Printed Gears/Couplers", "5V Power Supply"],
        tools: ["3D Printer", "Screwdriver", "Soldering Iron", "Calipers"],
        instructions: [
            { step: "Measurement", details: "Use calipers to measure the diameter of your blind's tilt wand. Design or download a coupler that fits tightly." },
            { step: "Printing", details: "Print the motor mount and the wand coupler. Use PETG if the window gets hot." },
            { step: "Mounting", details: "Attach the stepper motor to the wall/frame using Command strips (non-destructive). Slide the coupler over the wand." },
            { step: "Electronics", details: "Connect Driver IN1-4 to ESP8266 pins D1, D2, D3, D4. Connect 5V and GND." },
            { step: "Integration", details: "Flash with ESPHome. Add the 'Stepper' component. Integrate into Home Assistant for sunrise automation." }
        ]
    },
    {
        id: "desk-lamp",
        title: "Gravity-Defying Tensegrity Lamp",
        category: "Useful",
        difficulty: 3,
        cost: "$20",
        time: "Weekend",
        tags: ["3d-printer", "physics", "leds", "decor"],
        description: "A functional desk lamp that appears to float in mid-air using the physics of tension.",
        wowFactor: "It looks like it defies gravity. People will stare at it trying to figure it out.",
        skills: ["Structural Engineering", "Physics (Tension/Compression)", "3D Printing Optimization", "Basic Wiring"],
        certification_abstract: "This project explored the principles of Tensegrity (Tensional Integrity). The maker constructed a stable structure held together entirely by tension cables, demonstrating an understanding of force distribution and equilibrium.",
        parts: ["3D Printed Top Arm", "3D Printed Bottom Base", "Strong Fishing Line (Monofilament)", "USB LED Strip Kit", "Super Glue"],
        tools: ["3D Printer", "Scissors", "Tweezers"],
        instructions: [
            { step: "Print Settings", details: "Print parts with 100% infill or 4+ walls for maximum stiffness. Any flex will ruin the effect." },
            { step: "Center String", details: "Tie the center string first. This is the load-bearing string. Adjust length so the top arm 'hangs' just above the bottom arm." },
            { step: "Stabilizers", details: "Tie the 3 outer strings. These provide stability. Tighten them until the structure is rigid and the center string is taut." },
            { step: "Lighting", details: "Run the LED strip wire through the pre-designed hollow channel in the arms. Connect to USB power." }
        ]
    },
    {
        id: "smart-mirror",
        title: "Magic Smart Mirror",
        category: "Useful",
        difficulty: 3,
        cost: "$100 - $200",
        time: "Weekend",
        tags: ["woodworking", "coding", "home", "electronics"],
        description: "A mirror that displays the time, weather, and your calendar while you get ready in the morning.",
        wowFactor: "It feels like Iron Man's tech in your bathroom.",
        skills: ["Linux/Raspberry Pi OS", "Web Technologies (Electron/JS)", "Woodworking/Framing", "Optical Systems"],
        certification_abstract: "The builder constructed a 'Magic Mirror' by integrating a display system behind a two-way mirror. They configured a Raspberry Pi to run the MagicMirror² software platform, customizing modules for real-time data visualization.",
        parts: ["Raspberry Pi Zero W or 4", "Old LCD Monitor (VGA/HDMI)", "Two-Way Mirror Acrylic Sheet", "1x2 Wood for Frame", "Wood Stain"],
        tools: ["Miter Saw", "Drill", "Screwdriver", "Wood Glue"],
        instructions: [
            { step: "Monitor Teardown", details: "Carefully remove the plastic bezel from the LCD monitor to expose the bare metal casing." },
            { step: "Frame Build", details: "Measure the monitor + mirror thickness. Cut wood to build a box frame. Create a rebate (lip) to hold the mirror." },
            { step: "Assembly", details: "Place the two-way mirror face down. Place the monitor on top. Secure with back brackets." },
            { step: "Software Setup", details: "Install Raspberry Pi OS. Run the MagicMirror² installation script. Configure 'config.js' with your weather API keys." },
            { step: "Final Polish", details: "Stain the wood. Mount the Pi to the back of the monitor. Hang on the wall." }
        ]
    },
    {
        id: "air-quality",
        title: "Desktop Air Quality Monitor",
        category: "Useful",
        difficulty: 2,
        cost: "$40",
        time: "1 Day",
        tags: ["electronics", "coding", "health", "sustainable-tech"],
        description: "Know when to open a window. Tracks CO2, TVOCs, and humidity.",
        wowFactor: "Invisible threats made visible. The LEDs turn red when air is bad.",
        skills: ["Environmental Sensing", "I2C Communication Protocol", "Data Visualization", "Enclosure Design"],
        certification_abstract: "The maker built a device to monitor indoor air quality parameters (eCO2, TVOC). They successfully interfaced an SGP30 gas sensor with a microcontroller and implemented a visual feedback system using addressable LEDs.",
        parts: ["ESP8266 (NodeMCU)", "SGP30 Air Quality Sensor", "NeoPixel Ring (12 LED)", "3D Printed Case", "Micro USB Cable"],
        tools: ["Soldering Iron", "3D Printer", "Wire Strippers"],
        instructions: [
            { step: "Wiring", details: "Connect SGP30 VCC->3.3V, GND->GND, SDA->D2, SCL->D1. Connect NeoPixel IN->D6, VCC->5V, GND->GND." },
            { step: "Code Logic", details: "Use the 'Adafruit_SGP30' library. Read eCO2 baseline. Map eCO2 400-1000ppm to Green, 1000-2000ppm to Yellow, >2000ppm to Red." },
            { step: "Case Design", details: "Print a case with vents at the bottom and top to utilize the 'chimney effect' for natural airflow over the sensor." },
            { step: "Burn-in", details: "Run the sensor for 12 hours to burn off manufacturing residues for accurate readings." }
        ]
    },

    // ==========================================
    // FUN PROJECTS
    // ==========================================
    {
        id: "led-matrix",
        title: "Interactive LED Pixel Art Frame",
        category: "Fun",
        difficulty: 3,
        cost: "$60",
        time: "2-3 Weeks",
        tags: ["electronics", "coding", "art", "soldering"],
        description: "A 16x16 grid of LEDs that displays pixel art, animations, or even plays Tetris.",
        wowFactor: "Bright, colorful, and animated. It brings retro 8-bit vibes to your room.",
        skills: ["Power Distribution", "Microcontroller Programming (WLED)", "Soldering", "Enclosure Fabrication"],
        certification_abstract: "The maker designed and built a high-density LED matrix display. They managed power injection requirements for 256+ addressable LEDs and configured a WiFi-enabled microcontroller to drive complex animations and reactive lighting effects.",
        parts: ["WS2812B LED Matrix (16x16)", "ESP32 Microcontroller", "5V 10A Power Supply", "Shadow Box Frame", "Capacitor (1000uF)"],
        tools: ["Soldering Iron", "Hot Glue", "Wire Cutters", "Multimeter"],
        instructions: [
            { step: "Matrix Mounting", details: "Glue the LED matrix to the backboard of the shadow box. Ensure it is perfectly centered." },
            { step: "Power Injection", details: "Solder power wires (VCC/GND) to both the start and end of the matrix to prevent voltage drop (yellowing LEDs)." },
            { step: "Controller", details: "Connect ESP32 data pin (D2) to the matrix input via a 470-ohm resistor. Add a 1000uF capacitor across the power terminals." },
            { step: "Software", details: "Flash WLED firmware using the web installer. Connect to WiFi and configure the 16x16 2D matrix settings." }
        ]
    },
    {
        id: "nerf-turret",
        title: "Motion-Tracking Nerf Turret",
        category: "Fun",
        difficulty: 4,
        cost: "$80",
        time: "3 Weeks",
        tags: ["robotics", "coding", "3d-printer", "vision"],
        description: "An automated sentry gun that tracks movement and fires foam darts.",
        wowFactor: "It actually tracks you! Feels like something out of a sci-fi movie.",
        skills: ["Computer Vision (OpenCV)", "Servo Kinematics", "Relay Control", "Python Programming"],
        certification_abstract: "This project integrated computer vision with robotics to create an autonomous tracking system. The builder utilized OpenCV for motion detection and face tracking, translating coordinates into servo movements to aim a projectile launcher in real-time.",
        parts: ["Electric Nerf Gun", "2x MG996R High-Torque Servos", "USB Webcam", "Raspberry Pi 4", "5V Relay Module"],
        tools: ["3D Printer", "Soldering Iron", "Screwdriver"],
        instructions: [
            { step: "Hack Gun", details: "Open the Nerf gun and solder wires to the trigger switch, routing them to the relay." },
            { step: "Turret Base", details: "Print the Pan/Tilt mechanism. Assemble with the high-torque servos." },
            { step: "Vision Code", details: "Write a Python script using OpenCV to detect motion. Calculate the delta between the target center and frame center." },
            { step: "Fire Control", details: "Implement a PID controller for smooth tracking. Trigger the relay when the target is centered for >1 second." }
        ]
    },
    {
        id: "infinity-mirror",
        title: "Hyper-Deep Infinity Mirror",
        category: "Fun",
        difficulty: 2,
        cost: "$40",
        time: "Weekend",
        tags: ["woodworking", "electronics", "leds", "art"],
        description: "An optical illusion that creates a tunnel of light that seems to go on forever.",
        wowFactor: "The depth effect is mesmerizing.",
        skills: ["Optical Physics", "LED Strip Installation", "Woodworking", "Design Aesthetics"],
        certification_abstract: "The maker constructed an optical illusion device using a standard mirror and a one-way mirror. They successfully installed an internal lighting system to create a recursive reflection effect, demonstrating precision in assembly and design.",
        parts: ["Deep Shadow Box", "Standard Mirror", "Two-Way Mirror Film (or Acrylic)", "RGB LED Strip", "5V Power Supply"],
        tools: ["Scissors", "Knife", "Soldering Iron", "Glass Cleaner"],
        instructions: [
            { step: "Frame Prep", details: "Clean the glass of the shadow box thoroughly. Any dust will be visible forever." },
            { step: "Apply Film", details: "Apply the two-way mirror film to the front glass. Use soapy water and a squeegee to remove bubbles." },
            { step: "Install LEDs", details: "Stick the LED strip around the inner perimeter of the frame, exactly halfway between the front and back." },
            { step: "Backing", details: "Place the regular mirror at the very back, facing forward. Seal the frame to prevent light leaks." }
        ]
    },
    {
        id: "robot-pet",
        title: "Desktop Robot Companion",
        category: "Fun",
        difficulty: 4,
        cost: "$50 - $100",
        time: "Long-term",
        tags: ["robotics", "coding", "3d-printer", "ai"],
        description: "A small quadruped robot that lives on your desk. It can dance and avoid obstacles.",
        wowFactor: "It has personality! Moves like a living thing.",
        skills: ["Inverse Kinematics", "Robotics Assembly", "Sensor Integration", "Arduino Programming"],
        certification_abstract: "The builder assembled and programmed a quadruped robot. They implemented inverse kinematics algorithms to coordinate the movement of 8 servos, allowing the robot to walk, dance, and navigate its environment autonomously.",
        parts: ["8x SG90 Servos", "Arduino Nano", "Ultrasonic Sensor (HC-SR04)", "3D Printed Chassis/Legs", "LiPo Battery"],
        tools: ["3D Printer", "Screwdriver", "Soldering Iron"],
        instructions: [
            { step: "Print Body", details: "Print the chassis and 4 leg assemblies. Ensure tolerances allow for smooth movement." },
            { step: "Servo Zeroing", details: "Connect all servos to Arduino and run a 'Zero' sketch to set them to 90 degrees before attaching horns." },
            { step: "Assembly", details: "Assemble legs and attach to body. Cable manage the wires into the central cavity." },
            { step: "Gait Code", details: "Flash the firmware. Calibrate the 'creep' gait for stability. Implement obstacle avoidance logic." }
        ]
    },
    {
        id: "music-visualizer",
        title: "Real-Time Music Visualizer",
        category: "Fun",
        difficulty: 3,
        cost: "$30",
        time: "Weekend",
        tags: ["electronics", "coding", "audio-visual", "leds"],
        description: "LEDs that react to the beat and frequency of your music.",
        wowFactor: "Turns any room into a party.",
        skills: ["Signal Processing (FFT)", "Analog Sampling", "LED Animation", "C++ Programming"],
        certification_abstract: "This project involved creating an audio-reactive lighting system. The maker utilized Fast Fourier Transform (FFT) algorithms to analyze audio frequencies in real-time and mapped the data to dynamic LED patterns.",
        parts: ["Arduino Nano", "Sound Sensor (MAX4466 or similar)", "WS2812B LED Strip", "5V Power Supply", "Capacitor"],
        tools: ["Soldering Iron", "Wire Strippers"],
        instructions: [
            { step: "Audio Input", details: "Connect the analog output of the sound sensor to Arduino A0. Adjust the gain potentiometer on the sensor." },
            { step: "FFT Logic", details: "Use the ArduinoFFT library. Sample the audio signal at 40kHz. Perform FFT to separate Bass, Mids, and Treble." },
            { step: "Mapping", details: "Map Bass (0-150Hz) to Red/Pulse effects. Map Treble to Blue/Strobe effects." }
        ]
    },
    {
        id: "hologram",
        title: "Smartphone 3D Hologram Projector",
        category: "Fun",
        difficulty: 1,
        cost: "$5",
        time: "1 Hour",
        tags: ["crafts", "physics", "optics"],
        description: "A simple pyramid that turns your phone screen into a 3D hologram.",
        wowFactor: "Simple physics, mind-blowing result.",
        skills: ["Optics (Reflection/Refraction)", "Geometric Construction", "Prototyping"],
        certification_abstract: "The maker constructed a Pepper's Ghost pyramid projector. By calculating the correct angles and dimensions, they created a device capable of projecting a pseudo-holographic image from a 2D display source.",
        parts: ["Clear CD Case or Acrylic Sheet", "Clear Tape", "Smartphone", "Graph Paper"],
        tools: ["Plastic Cutter / X-Acto Knife", "Ruler", "Tape"],
        instructions: [
            { step: "Template", details: "Draw a trapezoid on graph paper (Base: 6cm, Top: 1cm, Height: 3.5cm). This angle is critical for reflection." },
            { step: "Cut", details: "Cut out 4 identical trapezoids from the clear plastic. Be careful not to scratch the surface." },
            { step: "Assemble", details: "Tape the edges together to form a pyramid with the top cut off." },
            { step: "Play", details: "Invert the pyramid on the center of your phone screen while playing a '4-sided hologram video' from YouTube." }
        ]
    },

    // ==========================================
    // PORTFOLIO PROJECTS
    // ==========================================
    {
        id: "weather-station",
        title: "IoT Solar Weather Station",
        category: "Portfolio",
        difficulty: 4,
        cost: "$60",
        time: "3 Weeks",
        tags: ["electronics", "coding", "data-science", "outdoor", "sustainable-tech"],
        description: "A self-sustaining station that logs weather data to the cloud.",
        wowFactor: "Shows full-stack skills: Hardware, power management, and cloud data.",
        skills: ["Solar Power Management", "Cloud Data Logging (IoT)", "PCB Design", "Low-Power Programming"],
        certification_abstract: "The builder engineered a remote, solar-powered environmental monitor. They designed a power management system for continuous operation and implemented a telemetry pipeline to transmit sensor data to a cloud dashboard.",
        parts: ["ESP32", "BME280 (Temp/Hum/Press)", "6V Solar Panel", "18650 LiPo Battery", "TP4056 Charger", "Waterproof Enclosure"],
        tools: ["Soldering Iron", "3D Printer", "Multimeter", "Drill"],
        instructions: [
            { step: "Power Circuit", details: "Design the solar charging circuit. Connect Solar -> TP4056 -> Battery -> Boost Converter -> ESP32." },
            { step: "Sensors", details: "Interface BME280 via I2C. Ensure the sensor is shielded from direct sunlight and rain (Stevenson Screen)." },
            { step: "Deep Sleep", details: "Code the ESP32 to enter Deep Sleep for 15 minutes between readings to extend battery life to months." },
            { step: "Dashboard", details: "Send data via MQTT or HTTP POST to ThingsSpeak/Firebase. Create graphs for historical trends." }
        ]
    },
    {
        id: "braille-display",
        title: "Refreshable Braille Display",
        category: "Portfolio",
        difficulty: 5,
        cost: "$40",
        time: "Long-term",
        tags: ["mechanical", "electronics", "accessibility", "3d-printer"],
        description: "Translates digital text into physical braille characters.",
        wowFactor: "Social impact + complex engineering.",
        skills: ["Assistive Technology Design", "Micro-Mechanical Systems", "Character Encoding", "Precision 3D Printing"],
        certification_abstract: "This project focused on assistive technology. The maker designed and fabricated a refreshable braille display using a custom cam-actuated mechanism, successfully translating digital text into tactile output.",
        parts: ["6x Micro Servos", "3D Printed Cams/Pins", "Arduino Mega", "Tactile Pins (Nails/Rod)", "Breadboard"],
        tools: ["3D Printer", "Calipers", "Sandpaper", "Files"],
        instructions: [
            { step: "Mechanism Design", details: "Design a cam system that pushes pins up when rotated. The throw must be exactly 0.5mm-1mm." },
            { step: "Print & Test", details: "Print at 0.1mm layer height. Sand parts for smooth friction. Tolerance is key here." },
            { step: "Actuation", details: "Connect servos to the cams. One servo can control multiple pins if using a complex linkage, or 1:1 for simplicity." },
            { step: "Translation", details: "Write a function to map ASCII characters to Braille binary patterns (e.g., 'A' = 100000)." }
        ]
    },
    {
        id: "drone-mapping",
        title: "Autonomous Mapping Drone",
        category: "Portfolio",
        difficulty: 5,
        cost: "$200+",
        time: "Long-term",
        tags: ["aerospace", "coding", "robotics", "vision"],
        description: "A drone that flies a path, takes photos, and stitches them into a 3D model.",
        wowFactor: "Combines flight dynamics, autonomy, and photogrammetry.",
        skills: ["UAV Flight Dynamics", "Mission Planning", "Photogrammetry", "Python/DroneKit"],
        certification_abstract: "The maker built and configured an autonomous UAV capable of executing waypoint missions. They utilized photogrammetry techniques to capture aerial imagery and reconstruct 3D terrain models.",
        parts: ["F450 Drone Frame", "Pixhawk Flight Controller", "Raspberry Pi 3B+", "GPS Module", "Pi Camera HQ"],
        tools: ["Soldering Iron", "Hex Keys", "Propeller Balancer"],
        instructions: [
            { step: "Drone Build", details: "Assemble the frame, motors, and ESCs. Ensure correct motor direction and prop orientation." },
            { step: "Flight Controller", details: "Configure ArduPilot. Calibrate accelerometer, compass, and radio. Set up failsafes." },
            { step: "Companion Computer", details: "Connect Pi to FC via UART (TELEM2). Install MAVLink router." },
            { step: "Mission Planning", details: "Script a grid mission using DroneKit-Python. Trigger camera at set intervals." }
        ]
    },
    {
        id: "sorting-arm",
        title: "AI Trash Sorting Arm",
        category: "Portfolio",
        difficulty: 5,
        cost: "$100",
        time: "1 Month",
        tags: ["ai", "robotics", "vision", "mechanical", "sustainable-tech"],
        description: "A robotic arm that identifies and sorts trash from recyclables.",
        wowFactor: "Computer vision meets real-world actuation.",
        skills: ["Machine Learning (TensorFlow)", "Robotic Kinematics", "System Integration", "Sustainability Tech"],
        certification_abstract: "This project applied machine learning to a real-world problem. The builder trained a custom object detection model to identify waste types and programmed a robotic arm to physically sort items based on classification confidence.",
        parts: ["4-DOF Robotic Arm Kit", "USB Webcam", "Raspberry Pi 4", "Stepper Motors", "Conveyor Belt (Optional)"],
        tools: ["Screwdriver", "Terminal", "Python IDE"],
        instructions: [
            { step: "Dataset", details: "Collect 100+ images each of bottles, cans, and paper. Label them using LabelImg." },
            { step: "Training", details: "Train a TensorFlow Lite model on your PC using Google Colab. Export the .tflite file." },
            { step: "Inference", details: "Run the model on the Pi. Draw bounding boxes and calculate the center point of the object." },
            { step: "Control", details: "Map class IDs to arm coordinates. If 'Can' -> Move to Bin A. If 'Paper' -> Move to Bin B." }
        ]
    },
    {
        id: "smart-glove",
        title: "Gesture Control Smart Glove",
        category: "Portfolio",
        difficulty: 4,
        cost: "$30",
        time: "2 Weeks",
        tags: ["wearables", "electronics", "coding", "bio-engineering"],
        description: "Control your computer or robot hand by moving your fingers.",
        wowFactor: "Minority Report vibes. Wearable tech is huge right now.",
        skills: ["Wearable Electronics", "Sensor Calibration", "Bluetooth Communication", "HCI Design"],
        certification_abstract: "The maker developed a wearable human-computer interface. By integrating flex sensors into a glove and transmitting data via Bluetooth, they created a system to control digital or physical assets through natural hand gestures.",
        parts: ["5x Flex Sensors", "Arduino Nano", "Fabric Glove", "HC-05 Bluetooth Module", "Resistors (10k)"],
        tools: ["Needle & Thread", "Soldering Iron", "Multimeter"],
        instructions: [
            { step: "Sew Sensors", details: "Stitch flex sensors onto the fingers of the glove. Ensure they bend when you make a fist." },
            { step: "Wiring", details: "Create a voltage divider for each sensor. Run wires to the wrist-mounted Arduino." },
            { step: "Data Processing", details: "Read analog values. Map the resistance range (flat vs bent) to 0-100." },
            { step: "Interface", details: "Send data via Bluetooth. Write a Python script on PC to interpret data as mouse/keyboard inputs." }
        ]
    },
    {
        id: "cnc-plotter",
        title: "Mini CNC Pen Plotter",
        category: "Portfolio",
        difficulty: 4,
        cost: "$50",
        time: "3 Weeks",
        tags: ["mechanical", "coding", "3d-printer", "robotics"],
        description: "A machine that draws digital images on paper with a real pen.",
        wowFactor: "Watching a machine draw is incredibly satisfying.",
        skills: ["CNC Fundamentals (G-Code)", "Stepper Motor Drive", "Mechanical Alignment", "Arduino GRBL"],
        certification_abstract: "The builder constructed a 2-axis CNC machine from recycled components. They configured GRBL firmware to interpret G-Code and precisely control stepper motors to render vector graphics on paper.",
        parts: ["2x DVD Drive Stepper Mechanisms", "Micro Servo (SG90)", "Arduino Uno", "CNC Shield v3", "A4988 Drivers"],
        tools: ["Soldering Iron", "Hot Glue", "Screwdriver"],
        instructions: [
            { step: "Salvage", details: "Extract stepper mechanisms from old DVD drives. Identify the 4 motor wires." },
            { step: "Frame", details: "Print or build a frame to hold the X and Y axes perpendicular. Alignment must be perfect." },
            { step: "Z-Axis", details: "Mount the servo to lift the pen up and down. Create a spring-loaded pen holder for even pressure." },
            { step: "G-Code", details: "Flash GRBL firmware to Arduino. Use Inkscape to generate G-Code. Stream to plotter using Universal G-Code Sender." }
        ]
    },
    // ==========================================
    // CIVIL & STRUCTURAL ENGINEERING
    // ==========================================
    {
        id: "earthquake-table",
        title: "Seismic Shake Table",
        category: "Useful", // Educational/Useful
        difficulty: 3,
        cost: "$30",
        time: "Weekend",
        tags: ["civil", "mechanical", "woodworking", "physics"],
        description: "A motorized platform that simulates earthquakes to test the structural integrity of your model buildings.",
        wowFactor: "Watching a tower collapse in slow motion is oddly satisfying (and educational).",
        skills: ["Mechanical Linkages", "Vibration Analysis", "Structural Testing", "Motor Control"],
        certification_abstract: "The maker built a seismic simulation device. Using a motorized cam mechanism, they created a variable-frequency shake table to test the resonant frequencies and failure modes of scale model structures.",
        parts: ["High-Torque DC Motor", "PWM Speed Controller", "Plywood Base & Platform", "4x Compression Springs", "Linear Rails/Drawer Slides"],
        tools: ["Drill", "Saw", "Screwdriver"],
        instructions: [
            { step: "Base Construction", details: "Build a sturdy bottom frame and a floating top platform. The top must move freely." },
            { step: "Mechanism", details: "Attach the motor to the base. Create an offset cam (eccentric wheel) to push the platform back and forth." },
            { step: "Suspension", details: "Mount the top platform on springs or drawer slides to allow linear movement while supporting weight." },
            { step: "Testing", details: "Build a tower out of pasta or balsa wood. Crank up the speed to find the resonant frequency where it fails." }
        ]
    },
    {
        id: "hydraulic-bridge",
        title: "Hydraulic Bascule Bridge",
        category: "Fun",
        difficulty: 2,
        cost: "$15",
        time: "1 Day",
        tags: ["civil", "mechanical", "fluids", "crafts"],
        description: "A model bridge that lifts up to let ships pass, powered by hydraulic pressure from syringes.",
        wowFactor: "Smooth, silent, and powerful movement using just water.",
        skills: ["Fluid Dynamics (Pascal's Principle)", "Truss Design", "Mechanical Hinging", "Prototyping"],
        certification_abstract: "This project demonstrated the principles of hydraulics and mechanical advantage. The builder designed a truss bridge and implemented a hydraulic actuation system using syringes to control the lifting mechanism.",
        parts: ["Cardboard/Popsicle Sticks", "4x Syringes (10ml)", "Plastic Tubing (Aquarium hose)", "Water", "Food Coloring"],
        tools: ["Hot Glue Gun", "Scissors", "Ruler"],
        instructions: [
            { step: "Truss Design", details: "Construct two identical bridge halves using a Warren Truss pattern (triangles) for maximum strength." },
            { step: "Hinge", details: "Create a strong hinge point at the base of each bridge section using a dowel or skewer." },
            { step: "Hydraulics", details: "Connect tubing between two syringes. Fill with colored water. Ensure no air bubbles remain." },
            { step: "Actuation", details: "Mount the 'slave' syringes under the bridge deck to push it up. Press the 'master' syringes to lift the bridge." }
        ]
    },
    {
        id: "concrete-coaster",
        title: "Custom Concrete Casting",
        category: "Portfolio", // Material Science
        difficulty: 2,
        cost: "$20",
        time: "Weekend",
        tags: ["civil", "materials", "3d-printer", "art"],
        description: "Learn the basics of mold making and concrete curing by creating geometric architectural coasters.",
        wowFactor: "Professional-grade finish that looks like it came from a design store.",
        skills: ["Mold Making", "Concrete Curing/Chemistry", "Surface Finishing", "3D Design"],
        certification_abstract: "The maker explored material science through concrete casting. They designed and fabricated custom negative molds, mixed and poured concrete, and applied finishing techniques to create durable architectural objects.",
        parts: ["Cement/Concrete Mix (Fine aggregate)", "3D Printed Mold (TPU or PLA) or Cardboard", "Concrete Sealer", "Cork Pads"],
        tools: ["3D Printer", "Sandpaper (200-1000 grit)", "Mixing Cup", "Scale"],
        instructions: [
            { step: "Mold Design", details: "Design a negative mold in CAD. If using PLA, design it to be broken away or draft angles for release." },
            { step: "Mixing", details: "Mix concrete to a peanut-butter consistency. Tap the mold repeatedly to release trapped air bubbles." },
            { step: "Curing", details: "Pour into mold. Cover with plastic to retain moisture. Let sit for 24-48 hours." },
            { step: "Finishing", details: "Demold. Sand the edges under water to prevent dust. Apply a waterproof sealer." }
        ]
    },

    // ==========================================
    // CHEMICAL & BIO ENGINEERING
    // ==========================================
    {
        id: "bioplastic-utensils",
        title: "Homemade Bioplastics",
        category: "Fun",
        difficulty: 1,
        cost: "$10",
        time: "1 Day",
        tags: ["chemical", "sustainable-tech", "kitchen-science"],
        description: "Synthesize your own biodegradable plastic using milk and vinegar or cornstarch.",
        wowFactor: "You turned milk into a solid, usable object!",
        skills: ["Polymer Chemistry", "Experimental Procedure", "Material Testing", "Sustainability"],
        certification_abstract: "The maker successfully synthesized a casein-based bioplastic. By controlling the acid precipitation reaction between milk and vinegar, they processed the resulting polymer into a molded, biodegradable product.",
        parts: ["Milk (High fat content)", "White Vinegar", "Food Coloring", "Cookie Cutters/Molds", "Glycerin (Optional for flexibility)"],
        tools: ["Stove/Microwave", "Pot", "Strainer", "Paper Towels"],
        instructions: [
            { step: "Reaction", details: "Heat milk until steaming (not boiling). Stir in vinegar (1 tbsp per cup). Watch the curds separate." },
            { step: "Filtration", details: "Strain the curds through a cheesecloth or strainer. Squeeze out ALL liquid." },
            { step: "Molding", details: "Knead the casein curds into a dough. Add food coloring. Press firmly into molds." },
            { step: "Drying", details: "Let dry for 2-3 days. It will shrink slightly and become rock hard." }
        ]
    },
    {
        id: "water-filter",
        title: "Multi-Stage Water Filtration",
        category: "Useful",
        difficulty: 2,
        cost: "$15",
        time: "1 Day",
        tags: ["chemical", "environmental", "survival"],
        description: "Build a survival-grade filter that turns dirty pond water into clear water using layers of natural materials.",
        wowFactor: "Seeing muddy water come out crystal clear is magical.",
        skills: ["Filtration Mechanics", "Water Purification", "Layering Techniques", "Environmental Engineering"],
        certification_abstract: "This project demonstrated water purification principles. The builder constructed a multi-stage filtration system using activated carbon and varying aggregate sizes to effectively remove particulate matter and impurities from water.",
        parts: ["2L Plastic Bottle", "Activated Charcoal (Aquarium grade)", "Fine Sand", "Coarse Sand", "Gravel", "Cotton/Coffee Filter"],
        tools: ["Knife", "Scissors"],
        instructions: [
            { step: "Prep Bottle", details: "Cut the bottom off a 2L bottle. Poke a hole in the cap or use a piece of cloth." },
            { step: "Layering", details: "Layer from bottom (cap) to top: Cotton -> Activated Charcoal -> Fine Sand -> Coarse Sand -> Gravel." },
            { step: "Testing", details: "Pour dirty water through. The gravel catches sticks, sand catches dirt, charcoal absorbs chemicals." },
            { step: "Note", details: "This removes particles and some chemicals, but NOT bacteria. Boil the water before drinking!" }
        ]
    },
    {
        id: "emg-controller",
        title: "Muscle-Controlled Bionic Interface",
        category: "Portfolio",
        difficulty: 5,
        cost: "$50",
        time: "2 Weeks",
        tags: ["biomedical", "electronics", "coding", "robotics"],
        description: "Use an EMG sensor to read electrical signals from your muscles and control a servo motor or game.",
        wowFactor: "You flex, and the machine moves. It's pure cyberpunk.",
        skills: ["Bio-Signal Processing", "Analog-to-Digital Conversion", "HCI", "Electromyography"],
        certification_abstract: "The maker developed a bionic interface using Electromyography (EMG). They successfully captured and processed bio-electrical signals from muscle contractions to control an external actuator, bridging biology and mechatronics.",
        parts: ["MyoWare Muscle Sensor (or AD8232)", "Arduino Uno", "Servo Motor", "EMG Electrodes (Sticky pads)", "9V Battery"],
        tools: ["Soldering Iron", "Laptop", "Oscilloscope (Optional)"],
        instructions: [
            { step: "Sensor Placement", details: "Place electrodes on your forearm muscle belly. Place the Reference (Ground) electrode on your elbow bone." },
            { step: "Signal Processing", details: "Read analog values on Arduino. Use a 'Running Average' code to smooth the noisy signal." },
            { step: "Thresholding", details: "Watch the Serial Plotter. Determine the voltage spike when you flex. Set this as your trigger threshold." },
            { step: "Actuation", details: "Map the signal strength to the servo angle (0-180). Flex = Servo Move." }
        ]
    },
    {
        id: "heart-monitor",
        title: "OLED Heart Rate Monitor",
        category: "Useful",
        difficulty: 3,
        cost: "$25",
        time: "Weekend",
        tags: ["biomedical", "electronics", "coding", "health"],
        description: "A wearable device that visualizes your heartbeat in real-time on a crisp OLED screen.",
        wowFactor: "Seeing your own EKG-style waveform is mesmerizing.",
        skills: ["Photoplethysmography (PPG)", "I2C Display Drivers", "Real-Time Plotting", "Wearable Design"],
        certification_abstract: "The builder created a portable heart rate monitor. Using a PPG sensor and an OLED display, they implemented real-time signal processing to calculate BPM and visualize the cardiac waveform.",
        parts: ["Pulse Sensor (Amped)", "Arduino Nano", "0.96 OLED Display", "3D Printed Case", "Velcro Strap"],
        tools: ["Soldering Iron", "3D Printer"],
        instructions: [
            { step: "Wiring", details: "Connect Pulse Sensor to Analog Pin 0. Connect OLED to I2C pins (A4/A5 on Nano)." },
            { step: "Code", details: "Use the 'PulseSensorPlayground' library. It handles the complex timing for accurate BPM calculation." },
            { step: "Graphics", details: "Draw a scrolling graph on the OLED. Clear a vertical slice of pixels ahead of the drawing line for a 'scan' effect." },
            { step: "Assembly", details: "Package it into a wrist-mountable case. Ensure the sensor stays pressed against the skin." }
        ]
    },

    // ==========================================
    // AEROSPACE ENGINEERING
    // ==========================================
    {
        id: "water-rocket",
        title: "High-Altitude Water Rocket",
        category: "Fun",
        difficulty: 3,
        cost: "$20",
        time: "Weekend",
        tags: ["aerospace", "physics", "outdoor"],
        description: "Not your average bottle rocket. This one uses a parachute deployment system to fly 100+ feet and land safely.",
        wowFactor: "The launch speed and height are genuinely impressive.",
        skills: ["Aerodynamics", "Pressure Systems", "Recovery System Design", "Launch Safety"],
        certification_abstract: "The maker designed and launched a high-performance water rocket. They engineered a pressure vessel, aerodynamic fins, and a passive parachute recovery system, achieving stable flight and safe return.",
        parts: ["2L Soda Bottles (x2)", "PVC Pipe (Launcher)", "Bicycle Valve", "Parachute (Trash Bag)", "Tennis Ball (Nose Weight)"],
        tools: ["Drill", "Tape", "Scissors", "Bike Pump"],
        instructions: [
            { step: "Fuselage", details: "Splice two bottles together using 'Robinson Coupling' method to create a larger pressure chamber." },
            { step: "Fins", details: "Cut aerodynamic fins from corrugated plastic. Glue them straight to the base. Stability is key." },
            { step: "Parachute", details: "Build a 'Tomy Timer' or passive air-flap deployment system where the nose cone falls off at apogee." },
            { step: "Launch", details: "Fill 1/3 with water. Pressurize to 60-80 PSI. Pull the release cord and stand back!" }
        ]
    },
    {
        id: "wind-tunnel",
        title: "Desktop Wind Tunnel",
        category: "Portfolio",
        difficulty: 4,
        cost: "$40",
        time: "2 Weeks",
        tags: ["aerospace", "mechanical", "physics", "data-science"],
        description: "A tool to visualize airflow and measure drag on your 3D printed models.",
        wowFactor: "Using smoke to see invisible air currents looks like a pro lab setup.",
        skills: ["Fluid Mechanics", "Laminar Flow Control", "Test Equipment Design", "Data Acquisition"],
        certification_abstract: "This project involved building a desktop wind tunnel for aerodynamic testing. The builder constructed a flow straightener and test section, enabling the visualization of airflow patterns and drag analysis on scale models.",
        parts: ["High-Static Pressure Fan (120mm)", "Honeycomb Straws (Flow Straightener)", "Acrylic Sheets", "Fog Machine (or Incense)", "Digital Scale (Drag measurement)"],
        tools: ["Laser Cutter or Saw", "Hot Glue", "Tape"],
        instructions: [
            { step: "Chamber", details: "Build a clear test section using acrylic. Ensure it is airtight." },
            { step: "Flow Straightener", details: "Pack drinking straws tightly at the inlet (honeycomb pattern) to turn turbulent air into laminar flow." },
            { step: "Fan Mount", details: "Mount the fan at the EXHAUST end. Pulling air through the tunnel creates smoother flow than pushing it." },
            { step: "Visualization", details: "Introduce a stream of smoke/fog upstream. Place your model in the center and observe the streamlines." }
        ]
    },
    {
        id: "balsa-glider",
        title: "Competition Balsa Glider",
        category: "Fun",
        difficulty: 2,
        cost: "$10",
        time: "1 Day",
        tags: ["aerospace", "woodworking", "crafts"],
        description: "Hand-carve a high-performance glider that can stay aloft for minutes.",
        wowFactor: "It floats on air like magic compared to a paper plane.",
        skills: ["Airfoil Design", "Center of Gravity (CG) Balancing", "Woodworking", "Trim Tuning"],
        certification_abstract: "The maker hand-crafted a high-performance glider. They shaped a balsa wood airfoil, optimized the center of gravity, and tuned the control surfaces for maximum lift-to-drag ratio and flight duration.",
        parts: ["Balsa Wood Sheets (1/16, 1/8 inch)", "Modeling Clay (Nose Weight)", "Super Glue (CA Glue)", "Sandpaper"],
        tools: ["X-Acto Knife", "Sandpaper (Various Grits)", "Ruler"],
        instructions: [
            { step: "Airfoil Shaping", details: "Sand the wings into a curved airfoil shape (teardrop cross-section). The top should be curved, bottom flat." },
            { step: "Dihedral", details: "Cut the wing in the center. Glue it back with a slight 'V' angle (Dihedral) for self-stabilizing flight." },
            { step: "Assembly", details: "Glue wings and tail to the fuselage stick. Ensure everything is perfectly square." },
            { step: "Trim", details: "Add clay to the nose until it glides perfectly flat. If it stalls (dips up then down), add more nose weight." }
        ]
    }
];
