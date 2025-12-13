import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { 
    DomesticIcon, InternationalIcon, 
    SeaIcon, AirIcon, LandIcon 
} from '../icons/CustomIcons';

const ShippingContent = () => {
    const { notify, navigateTo, activePage } = useContext(AppContext);
    
    const parts = activePage.split('_');
    const selectedType = parts[1]; 
    const selectedMethod = parts[2];

    let step = 1; 
    if (selectedType) step = 2; 
    if (selectedMethod) step = 3; 

    const handleTypeSelect = (type) => {
        navigateTo(`shipping_${type}`); 
        notify('success', type === 'local' ? 'Domestic' : 'International', 'Selected');
    };

    const handleMethodSelect = (method) => {
        navigateTo(`shipping_${selectedType}_${method.replace(/ /g, '')}`);
        notify('success', method, 'Processing request...');
    };

    return (
        <div className="max-w-5xl ml-4 md:ml-12 animate-[fadeIn_0.5s_ease-out] py-10 px-4">
            
            <div className="mb-16 flex items-center relative">
                <div className="text-left">
                    <h1 className="text-4xl font-bold text-textPrimary dark:text-white mb-2">
                        {step === 1 ? 'Shipping Type' : step === 2 ? 'Shipping Method' : 'Order Details'}
                    </h1>
                    <p className="text-lg text-textSecondary dark:text-darkTextSecondary font-sans">
                        {step === 1 ? 'Select delivery scope' : 
                         step === 2 ? `Select mode for ${selectedType === 'local' ? 'Domestic' : 'International'}` :
                         `Finalizing ${selectedMethod} for ${selectedType}`}
                    </p>
                </div>
            </div>

            {/* --- Step 1 --- */}
            {step === 1 && (
                <div className="flex flex-wrap justify-start gap-20 mt-12 pl-4">
                    <button onClick={() => handleTypeSelect('local')} className="group flex flex-col items-center gap-6 transition-transform duration-300 hover:-translate-y-2">
                        <div className="w-32 h-32 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                            <DomesticIcon />
                        </div>
                        <span className="text-2xl font-bold text-textPrimary dark:text-white group-hover:text-green-500 transition-colors">Domestic</span>
                    </button>

                    <button onClick={() => handleTypeSelect('intl')} className="group flex flex-col items-center gap-6 transition-transform duration-300 hover:-translate-y-2">
                        <div className="w-32 h-32 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                            <InternationalIcon />
                        </div>
                        <span className="text-2xl font-bold text-textPrimary dark:text-white group-hover:text-blue-500 transition-colors">International</span>
                    </button>
                </div>
            )}

            {/* --- Step 2 --- */}
            {step === 2 && (
                <div className="grid grid-cols-3 gap-16 justify-items-start mt-16 max-w-3xl pl-4">
                    <button onClick={() => handleMethodSelect('Sea Freight')} className="group flex flex-col items-center gap-4 w-40 transition-transform duration-300 hover:-translate-y-1">
                        <div className="w-24 h-24 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                            <SeaIcon />
                        </div>
                        <div className="text-center">
                            <span className="block text-xl font-bold text-textPrimary dark:text-white group-hover:text-cyan-400 transition-colors">Sea Freight</span>
                            <span className="text-sm text-textSecondary dark:text-darkTextSecondary font-sans">Ocean Transport</span>
                        </div>
                    </button>

                    <button onClick={() => handleMethodSelect('Air Freight')} className="group flex flex-col items-center gap-4 w-40 transition-transform duration-300 hover:-translate-y-1">
                        <div className="w-24 h-24 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                            <AirIcon />
                        </div>
                        <div className="text-center">
                            <span className="block text-xl font-bold text-textPrimary dark:text-white group-hover:text-purple-400 transition-colors">Air Freight</span>
                            <span className="text-sm text-textSecondary dark:text-darkTextSecondary font-sans">Express Delivery</span>
                        </div>
                    </button>

                    <button onClick={() => handleMethodSelect('Land Freight')} className="group flex flex-col items-center gap-4 w-40 transition-transform duration-300 hover:-translate-y-1">
                        <div className="w-24 h-24 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                            <LandIcon />
                        </div>
                        <div className="text-center">
                            <span className="block text-xl font-bold text-textPrimary dark:text-white group-hover:text-yellow-400 transition-colors">Land Freight</span>
                            <span className="text-sm text-textSecondary dark:text-darkTextSecondary font-sans">Truck Transport</span>
                        </div>
                    </button>
                </div>
            )}
            
            {/* --- Step 3 --- */}
            {step === 3 && (
                <div className="mt-12 p-8 bg-cardWhite dark:bg-darkCard rounded-3xl shadow-soft border border-gray-100 dark:border-gray-800 animate-fade-in">
                    <h2 className="text-2xl font-bold mb-4 text-green-500">Selection Complete!</h2>
                    <div className="space-y-2 text-textPrimary dark:text-white">
                        <p>Type: <span className="font-mono font-bold uppercase">{selectedType}</span></p>
                        <p>Method: <span className="font-mono font-bold uppercase">{selectedMethod}</span></p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShippingContent;