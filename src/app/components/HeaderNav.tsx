import Image from 'next/image';
import React from 'react';

const HeaderNav = () => {
    return (
        <header className="bg-gradient-to-r from-[#4B0F0F] via-[#21255f] to-[#4B0F0F] text-white shadow-md">
            <div className="flex items-center  py-2">
                {/* Logo */}
                <div className="relative justify-center flex" style={{ width: 150, height: 50 }}>
                    <Image
                        src="/images/j4UOhc5DEdGrBCUYIoFU5norKbg.avif"
                        alt="Banner"
                        width={170}
                        height={72}
                        className="absolute"
                        style={{
                            width: "100%",
                            height: 72,
                            top: -10,
                            borderRadius: "inherit",
                            objectFit: "cover",
                        }}
                    />
                    <Image
                        src="/images/UbZzFWYYu1TrWNIRXOJEZpjlC0.avif"
                        alt="Banner"
                        className="relative z-10"
                        width={78}
                        height={53}
                        style={{
                            borderRadius: "inherit",
                            objectFit: "cover",
                        }}
                    />
                </div>

                {/* Navigation Links */}
                <nav className="hidden md:flex gap-8 font-semibold text-lg">
                    <a href="#san-pham" className="hover:text-yellow-400">SẢN PHẨM</a>
                    <a href="#cau-chuyen" className="hover:text-yellow-400">CÂU CHUYỆN</a>
                    <a href="#bai-viet" className="hover:text-yellow-400">BÀI VIẾT</a>
                    <a href="#lien-he" className="hover:text-yellow-400">LIÊN HỆ</a>
                </nav>

                {/* Mua hàng button */}
                <div className='relative' style={{ height: 55, flex: 1, }}>
                    <button
                        className="bg-[#F9A825] text-white font-bold uppercase px-6 py-2 absolute hover:bg-gradient-to-r hover:from-[#5a2a7c] hover:to-[#d1161b] transition-all"
                        style={{ width: 180, height: 70, top: -7, right: 0 }}
                    >
                        MUA HÀNG
                    </button>

                </div>
            </div>
        </header>
    );
};

export default HeaderNav;
