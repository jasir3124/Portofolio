'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const ProjectGallery = ({ images }) => {
    const [activeImageIndex, setActiveImageIndex] = useState(null);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (activeImageIndex === null) return;

            switch (e.key) {
                case 'Escape':
                    setActiveImageIndex(null);
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    setActiveImageIndex(prev => prev > 0 ? prev - 1 : images.length - 1);
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    setActiveImageIndex(prev => prev < images.length - 1 ? prev + 1 : 0);
                    break;
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [activeImageIndex, images.length]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (activeImageIndex !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [activeImageIndex]);

    const openModal = (index) => setActiveImageIndex(index);
    const closeModal = () => setActiveImageIndex(null);

    const goToPrevious = () => {
        setActiveImageIndex(prev => prev > 0 ? prev - 1 : images.length - 1);
    };

    const goToNext = () => {
        setActiveImageIndex(prev => prev < images.length - 1 ? prev + 1 : 0);
    };

    return (
        <div className="w-full">
            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02] bg-gray-100"
                        onClick={() => openModal(index)}
                    >
                        <div className="w-full aspect-video relative">
                            <Image
                                src={img}
                                alt={`Screenshot ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                        </div>
                    </div>

                ))}
            </div>

            {/* Enhanced Fullscreen Modal */}
            {activeImageIndex !== null && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
                    onClick={closeModal}
                >
                    {/* Close Button */}
                    <button
                        className="absolute top-4 right-4 z-10 text-white hover:text-gold transition-colors duration-200 p-2"
                        onClick={closeModal}
                        aria-label="Close modal"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Navigation Buttons */}
                    <button
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gold transition-colors duration-200 p-2 bg-black bg-opacity-50 rounded-full"
                        onClick={(e) => {
                            e.stopPropagation();
                            goToPrevious();
                        }}
                        aria-label="Previous image"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gold transition-colors duration-200 p-2 bg-black bg-opacity-50 rounded-full"
                        onClick={(e) => {
                            e.stopPropagation();
                            goToNext();
                        }}
                        aria-label="Next image"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Image Container */}
                    <div className="relative max-w-[95vw] max-h-[95vh]" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={images[activeImageIndex]}
                            alt={`Screenshot ${activeImageIndex + 1}`}
                            width={1200}
                            height={800}
                            className="max-w-full max-h-[95vh] object-contain rounded-lg shadow-2xl"
                            priority
                        />

                        {/* Image Counter */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 text-white px-4 py-2 rounded-full text-sm">
                            {activeImageIndex + 1} / {images.length}
                        </div>
                    </div>

                    {/* Keyboard Instructions */}
                    <div className="absolute bottom-4 right-4 text-white text-xs opacity-75">
                        Use ← → to navigate, ESC to close
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectGallery;
