import { Box, ButtonGroup, Button, CardBody, Card as ChakraCard, ChakraProvider, Flex, Heading, IconButton, Image, Stack, Text, extendTheme } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import './merchandise.css';
import ebajaMerch from '/assets/images/ebajaMerch.png';
import qr from '/payment/qr.jpg';
import { supabase } from "./supabase";

const theme = extendTheme({
    colors: {
        brand: {
            coffee: "#603813",
            darkCoffee: "#3E2712",
            caramel: "#C17A2B",
            nudeBrown: "#A36D40",
        },
        gradients: {
            coffeeGradient: "linear(to-br, #A36D40, #603813)",
        },
    },
});

const Merchandise = () => {
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [showSizeOptions, setShowSizeOptions] = useState(true);
    const [showColorOptions, setShowColorOptions] = useState(true);
    const sizeOptions = ["XS", "S", "M", "L", "XL", "XXL"];
    const ColorOptions = ["Black", "Gray", "Blue"];
    const [formData, setFormData] = useState({
        name: '',
        branch: '',
        year: '',
        phone: '',
        screenshot: null,
    });


    const handleSizeClick = () => {
        if (selectedSize != "") {
            setShowSizeOptions(!showSizeOptions);
        }
    };
    const handleColorClick = () => {
        setShowColorOptions(!showColorOptions);
    };

    const handleIncreaseQuantity = () => {
        setSelectedQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecreaseQuantity = () => {
        setSelectedQuantity(prevQuantity => prevQuantity > 1 ? prevQuantity - 1 : 1);
    };

    const totalAmount = selectedQuantity * 799;

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!selectedSize) {
            alert("Please select a size.");
            return;
        }
        if(!selectedColor) {
            alert("Please select a color.");
            return;
        }
        

        try {
            console.log("File name:", formData.screenshot?.name);
        console.log("Generated path:", `payments/${Date.now()}_${formData.screenshot?.name}`);
        console.log("File object:", formData.screenshot);
            
            const { data: fileData, error: uploadErr } = await supabase.storage
                .from('screenshots')
                .upload(`payments/${Date.now()}_${formData.screenshot.name}`, formData.screenshot);

            if (uploadErr) return console.error("Upload error", uploadErr);

            const screenshotUrl = supabase.storage
                .from('screenshots')
                .getPublicUrl(fileData.path).data.publicUrl;

            const { error: insertErr } = await supabase
                                        .from('Payments')
                                        .insert([{
                                            name: formData.name,
                                            branch: formData.branch,
                                            year: formData.year,
                                            phone: formData.phone,
                                            size: selectedSize,
                                            color: selectedColor,
                                            amount: totalAmount,
                                            ss_url: screenshotUrl
                                        }]);

                if (insertErr) return console.error("Insert error", insertErr);

                alert("✅ Submitted!");
            setFormData({ name: '', branch: '', year: '', phone: '', screenshot: null });
        } catch (err) {
            console.error("❌ Error:", err);
            alert("Failed to submit. Please try again.");
        }
    };

    return (
        <div className="relative" style={{ background: "#fffbf5" }}>
            <ChakraProvider theme={theme}>
                <Flex justifyContent="center" alignItems="center" style={{ display: "flex" }}>
                    <ChakraCard borderWidth="0px" overflow="hidden" backgroundColor={"#fffbf5"} color="gradients.coffeeGradient" boxShadow="md" minHeight="85vh">
                        <CardBody minHeight="85vh">
                            <Flex minHeight="85vh" justifyContent="center" alignItems="center">
                                <Box flex="1" pr="5" className="flex flex-col merchBoxImg justify-center">
                                    <Image src={ebajaMerch} h="460px" maxH="700px" w="425px" maxW="500px" className="merchImg" />
                                </Box>

                                <Box flex="1" className="merchOptions">
                                    <Stack spacing="5" className="">
                                        <div className="top px-5 sm:px-0">
                                            <Heading size="md" color="brand.darkCoffee" className=""><span className="font-albulaHeavy text-3xl">MotoSports Merch</span></Heading>
                                            <Heading color="brand.caramel"><span className="font-albulaHeavy text-5xl">Discover the Passion </span></Heading>

                                            <Text color="brand.darkCoffee" className="merchText font-albula mt-2">
                                                Ready to immerse yourself in the world of vibrant motorsports? Dive in, grab our mesmerizing merch, and unlock your ticket to being fantastic!
                                            </Text>
                                        </div>

                                        <Box flex="1" pr="0" className=" flex flex-col merchBoxImg justify-center mobileMerchImg my-8">
                                            <Image src={ebajaMerch} h="460px" maxH="700px" w="425px" maxW="500px" className="merchImg" />
                                        </Box>
                                        
                                        <div className="">
                                            <Text className="quantityBtn" color="brand.darkCoffee" fontSize="2xl" fontWeight={650}><span className="font-albulaMedium"><span className="font-inter font-black">Price:-</span> 799/-</span></Text>

                                            <Box className="MerchProp flex flex-col gap-2">
                                                <div className="size flex  gap-2">
                                                    <Button onClick={handleSizeClick} minWidth={160} className="btnSize" variant="solid" colorScheme="brand.darkCoffee" bg="brand.darkCoffee" _hover={{ bg: "brand.caramel" }} fontFamily="albula">
                                                        {
                                                            `Size : ${selectedSize}`
                                                        }
                                                    </Button>

                                                    {showSizeOptions && (
                                                        <ButtonGroup spacing="1">
                                                                {sizeOptions.map((size) => (
                                                                    <Button key={size} onClick={() => { setSelectedSize(size); setShowSizeOptions(false); }} color="whitesmoke" bg="brand.darkCoffee" _hover={{ bg: "brand.caramel" }}>
                                                                        {size}
                                                                    </Button>
                                                                ))}
                                                        </ButtonGroup>
                                                    )}
                                                </div>

                                                <div className="color flex gap-2">
                                                    <Button onClick={handleColorClick} minWidth={160} className="btnSize" variant="solid" colorScheme="brand.darkCoffee" bg="brand.darkCoffee" _hover={{ bg: "brand.caramel" }} fontFamily="albula">
                                                        {
                                                            `Color : ${selectedColor}`
                                                        }
                                                    </Button>

                                                    {showColorOptions && (
                                                        <ButtonGroup spacing="1">
                                                            {ColorOptions.map((clr) => (
                                                                <Button key={clr} onClick={() => { setSelectedColor(clr); setShowColorOptions(false); }} color="whitesmoke" bg="brand.darkCoffee" _hover={{ bg: `${clr}` }}>
                                                                    {clr}
                                                                </Button>
                                                            ))}
                                                        </ButtonGroup>
                                                    )}
                                                </div>
                                            </Box>

                                            <Flex className="quantityBtn" alignItems="center" mt={0}>
                                                <IconButton
                                                    icon={<MinusIcon />}
                                                    onClick={handleDecreaseQuantity}
                                                    size="sm"
                                                    aria-label="Decrease quantity"
                                                />
                                                <Text mx="4" fontSize="2xl">{selectedQuantity}</Text>
                                                <IconButton
                                                    icon={<AddIcon />}
                                                    onClick={handleIncreaseQuantity}
                                                    size="sm"
                                                    aria-label="Increase quantity"
                                                />
                                            </Flex>

                                            <div className="amountRazor flex justify-center flex-col gap-5 w-[450px]">
                                                <Text color="brand.darkCoffee" fontSize="2xl" fontWeight={650} mt={2}>
                                                    <span className="font-albulaMedium ">
                                                        <span className="font-albula font-black">Total Amount :  </span>
                                                        {totalAmount}/-
                                                    </span>
                                                </Text>
                                            </div>

                                            {/* Payment Form */}
                                            <div className="max-w-md mx-auto mt-10 p-6 rounded-2xl bg-white shadow-lg border border-gray-200">
                                                <h2 className="text-2xl font-bold mb-5 text-center text-gray-800">Complete Your Payment</h2>

                                                <img
                                                    src={qr}
                                                    alt="UPI QR"
                                                    className="w-48 h-48 mx-auto mb-3"
                                                />
                                                <p className="text-center text-gray-700 font-medium">UPI ID: <span className="font-semibold">yourname@upi</span></p>
                                                <p className="text-center text-sm text-gray-500 mb-6">Amount: ₹{totalAmount} | Size: {selectedSize}</p>

                                                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                                    <input
                                                    name="name"
                                                    placeholder="Full Name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    />
                                                    <input
                                                    name="branch"
                                                    placeholder="Branch"
                                                    value={formData.branch}
                                                    onChange={handleChange}
                                                    required
                                                    className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    />
                                                    <input
                                                    name="year"
                                                    placeholder="Year (e.g., 2nd Year)"
                                                    value={formData.year}
                                                    onChange={handleChange}
                                                    required
                                                    className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    />
                                                    <input
                                                    name="phone"
                                                    placeholder="Phone Number"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                    className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    />
                                                    <input
                                                    type="file"
                                                    accept="image/*"
                                                    name="screenshot"
                                                    onChange={handleChange}
                                                    required
                                                    className="px-3 py-2 border border-gray-300 rounded-md text-sm file:bg-blue-500 file:text-white file:px-4 file:py-2 file:rounded file:cursor-pointer"
                                                    />
                                                    <button
                                                    type="submit"
                                                    
                                                    className="mt-2 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-all"
                                                    >
                                                    Submit
                                                    </button>
                                                </form>
                                            </div>

                                        </div>

                                    </Stack>
                                </Box>
                            </Flex>
                        </CardBody>
                    </ChakraCard>
                </Flex>
            </ChakraProvider>
        </div>
    );
};

export default Merchandise;
