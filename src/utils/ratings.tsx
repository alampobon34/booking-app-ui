import Image from "next/image";

export const getRatings = (rating: number) => {
    if (rating > 0 && rating < 1) {
        return (
            <div className="flex">
                <Image
                    src="/assets/icons/star-fill.svg"
                    width={16}
                    height={16}
                    alt=""
                />
                <Image src="/assets/icons/star.svg" width={16} height={16} alt="" />
                <Image src="/assets/icons/star.svg" width={16} height={16} alt="" />
                <Image src="/assets/icons/star.svg" width={16} height={16} alt="" />
                <Image src="/assets/icons/star.svg" width={16} height={16} alt="" />
            </div>
        );
    }
    if (rating > 1 && rating < 2) {
        return (
            <div className="flex">
                <Image
                    src="/assets/icons/star-fill.svg"
                    width={16}
                    height={16}
                    alt=""
                />
                <Image
                    src="/assets/icons/star-fill.svg"
                    width={16}
                    height={16}
                    alt=""
                />
                <Image src="/assets/icons/star.svg" width={16} height={16} alt="" />
                <Image src="/assets/icons/star.svg" width={16} height={16} alt="" />
                <Image src="/assets/icons/star.svg" width={16} height={16} alt="" />
            </div>
        );
    }
    if (rating > 2 && rating < 3) {
        return (
            <div className="flex">
                <Image
                    src="/assets/icons/star-fill.svg"
                    width={16}
                    height={16}
                    alt=""
                />
                <Image
                    src="/assets/icons/star-fill.svg"
                    width={16}
                    height={16}
                    alt=""
                />
                <Image
                    src="/assets/icons/star-fill.svg"
                    width={16}
                    height={16}
                    alt=""
                />
                <Image src="/assets/icons/star.svg" width={16} height={16} alt="" />
                <Image src="/assets/icons/star.svg" width={16} height={16} alt="" />
            </div>
        );
    }
    if (rating > 3 && rating < 4) {
        return (
            <div className="flex">
                <Image
                    src="/assets/icons/star-fill.svg"
                    width={16}
                    height={16}
                    alt=""
                />
                <Image
                    src="/assets/icons/star-fill.svg"
                    width={16}
                    height={16}
                    alt=""
                />
                <Image
                    src="/assets/icons/star-fill.svg"
                    width={16}
                    height={16}
                    alt=""
                />
                <Image src="/assets/icons/star.svg" width={16} height={16} alt="" />
                <Image src="/assets/icons/star.svg" width={16} height={16} alt="" />
            </div>
        );
    }
    if (rating > 4 && rating < 5) {
        return (
            <div className="flex">
                <Image
                    src="/assets/icons/star-fill.svg"
                    width={16}
                    height={16}
                    alt=""
                />
                <Image
                    src="/assets/icons/star-fill.svg"
                    width={16}
                    height={16}
                    alt=""
                />
                <Image
                    src="/assets/icons/star-fill.svg"
                    width={16}
                    height={16}
                    alt=""
                />
                <Image
                    src="/assets/icons/star-fill.svg"
                    width={16}
                    height={16}
                    alt=""
                />
                <Image src="/assets/icons/star.svg" width={16} height={16} alt="" />
            </div>
        );
    }
    if (rating > 5 && rating < 6) {
        return (
            <div className="flex">
                <Image
                    src="/assets/icons/star-fill.svg"
                    width={16}
                    height={16}
                    alt=""
                />
                <Image
                    src="/assets/icons/star-fill.svg"
                    width={16}
                    height={16}
                    alt=""
                />
                <Image
                    src="/assets/icons/star-fill.svg"
                    width={16}
                    height={16}
                    alt=""
                />
                <Image
                    src="/assets/icons/star-fill.svg"
                    width={16}
                    height={16}
                    alt=""
                />
                <Image src="/assets/icons/star.svg" width={16} height={16} alt="" />
                <Image src="/assets/icons/star.svg" width={16} height={16} alt="" />
            </div>
        );
    }
};