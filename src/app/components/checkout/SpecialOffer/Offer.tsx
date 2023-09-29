import Image from "next/image";
import Number from "../../Number";
import Divider from "../../Divider";

const Offer = ({dictionary}: {dictionary: any}) => {
  const dict = dictionary["checkout"];
  const productDict = dict["thirdStep"]["product"];
  const reviewDict = dict["thirdStep"]["review"];

  return (
    <article className="offer w-full md:p-10 rounded-[10px] md:bg-neutral-50">
      <div className="details grid md:grid-cols-2 gap-10">
        <div className="left hidden md:grid gap-6">
          <div className="image relative w-full md:h-[591px]">
            <Image src="/images/offer.png" fill alt="Satisfaction 30 days guarantee" />
          </div>
          <div className="client-review p-6 grid gap-[18px] rounded-[10px] bg-white">
            <div className="client flex gap-[13px] items-center">
              <div className="avatar relative w-12 h-12 rounded-full overflow-hidden" aria-label="Woman client picture">
                <Image src="/images/client-avatar.jpg" fill quality={50} style={{
                  objectFit: 'cover',
                  objectPosition: '42% -4px',
                  scale: 1.45
                }} alt="" />
              </div>
              <div className="info flex flex-col gap-2">
                <div className="rating flex" aria-label={reviewDict["rating"]}>
                  {Array(5).fill(0).map((_, i) => (
                    <Image key={`rating-star-${i}`} src="/icons/checkout/star-filled.svg" width={13} height={13} alt="" aria-hidden />
                  ))}
                </div>
                <div className="flex items-center gap-[10px] client-name text-sm text-zinc-800 font-bold leading-none">
                  {reviewDict["name"]}
                  <div className="flex items-center text-emerald-400 text-xs font-normal">
                    <Image src="/icons/checkout/verified-badge.svg" width={16} height={16} className="mr-[10px]" alt="" aria-hidden />
                    {dict["verifiedCustomer"]}
                  </div>
                </div>
              </div>
            </div>
            <div className="description tracking-[-.005em]">
              {reviewDict["description"]}
            </div>
          </div>
        </div>
        <div className="content grid gap-6 md:gap-8">
          <div
            className="-mb-3 text-2xl md:text-[32px] text-black max-md:text-center capitalize leading-snug md:leading-tight"
            dangerouslySetInnerHTML={{__html: dict["thirdStep"]["offer"]["title"]}}>
          </div>

          <div className="mobile-offer-thumb md:hidden relative w-full h-[328px]">
            <Image src="/images/offer.png" fill alt="" className="md:hidden" aria-hidden style={{
              objectFit: 'cover'
            }} />
          </div>
          
          <div className="product grid grid-cols-[80px_auto] md:grid-cols-[134px_auto] gap-6 w-full">
            <div className="thumb relative w-full h-20 md:h-[134px] bg-crayola rounded-[10px]">
              <Image src="/images/product.png" fill alt="" aria-hidden />
            </div>

            <div className="relative info flex flex-col gap-[10px] md:gap-[15px]">
              <h3 className="name text-black text-sm md:text-xl capitalize leading-none md:leading-none">{productDict["title"]}</h3>
              <div className="price absolute top-0 right-0 flex items-center gap-2 md:gap-[10px] leading-none">
                <Number
                  number={parseFloat(productDict["price"])}
                  className="text-neutral-400 text-[10px] md:text-base font-semibold line-through"
                  ariaLabel={`${dict["from"]} $${productDict["price"]}`} />

                <Number
                  number={parseFloat(productDict["sale-price"])}
                  className="text-crayola text-sm md:text-[22px] font-semibold"
                  ariaLabel={`${dict["for-only"]} $${productDict["sale-price"]}`} />
              </div>
              <div className="rating flex">
                {Array(5).fill(0).map((_, i) => (
                  <div key={`rating-star-${i}`} className="w-3 md:w-[18px]">
                    <Image src="/icons/checkout/star-filled.svg" width={18} height={18} alt="" />
                  </div>
                ))}
              </div>
              <div className="stock flex items-center gap-4 text-xs md:text-base font-light leading-none md:leading-none">
                <div className="pulsingIcon relative w-4 h-4">
                  <div className="w-4 h-4 left-0 top-0 absolute bg-sky-100 rounded-full" />
                  <div className="w-2 h-2 left-2 top-2 absolute -translate-x-1/2 -translate-y-1/2 bg-crayola rounded-full animate-pulse" />
                </div>
                {`${productDict["stock"]} ${dict["leftInStock"]}`}
              </div>
              <div className="description max-md:hidden -mt-1 text-base leading-tight" dangerouslySetInnerHTML={{__html: productDict["description"]}}></div>
            </div>
          </div>
          <div className="description md:hidden -mt-2 text-xs text-center leading-snug tracking-[-.01em]" dangerouslySetInnerHTML={{__html: productDict["description"]}}></div>

          <div className="attributes grid gap-4">
            {productDict["attributes"].map((attribute: any, i: number) => (
              <div key={`attribute-${i}`} className="attribute flex items-center gap-3">
                <div className="check relative w-4 h-4 md:w-[22px] md:h-[22px]" aria-hidden>
                  <Image src="/icons/checkout/tick-blue.svg" fill alt="" />
                </div>
                <div className="name text-xs md:text-base leading-none capitalize" dangerouslySetInnerHTML={{__html: attribute}}></div>
              </div>
            ))}
          </div>

          <div className="savings w-full px-4 py-3 bg-crayola/10 rounded-[10px] grid grid-cols-[auto_auto] items-center gap-4">
            <div className="w-6 h-6 md:w-8 md:h-8 relative" aria-hidden>
              <Image src="/icons/checkout/pcnt.svg" fill alt="" />
            </div>
            <div className="text-black text-sm md:text-base">
              Save <span className="text-crayola">53%</span> and get <span className="text-crayola">6 extra Clarifision</span> for only <span className="text-crayola">$14 Each</span>.
            </div>
          </div>

          <div className="cta">
            <a href="#claim-discount" target="_blank" className="group flex items-center justify-center gap-5 w-full py-4 cursor-pointer duration-200 hover:brightness-105 bg-apple rounded-[50px] text-sm md:text-xl text-white text-center font-bold uppercase">
              {productDict["cta"]}
              <Image src="/icons/checkout/cta-arrow.svg" width={18} height={15} alt="" aria-hidden="true" className="duration-200 group-hover:translate-x-3" />
            </a>

            <div className="
              incentives mt-3 py-2 px-4
              grid 
              grid-cols-[auto_auto_auto] max-md:grid-rows-[auto_auto_auto]
              md:grid-cols-[auto_auto_auto_auto_auto]
              gap-3 md:gap-4 items-center
              text-xs rounded
              border border-stone-300
            ">
              <span className="free-shipping">{productDict["incentives"][0]}</span>
              <Divider />
              <span className="safe flex items-center gap-2 md:gap-[10px] max-md:tracking-tight">
                <Image src="/icons/checkout/lock.svg" width={12} height={13} alt="" aria-hidden={true} />
                {productDict["incentives"][1]}
              </span>
              <Divider className="hidden md:block" />
              <Divider className="md:hidden col-span-3" orientation="horizontal" />
              <span className="payment-methods w-full max-md:col-span-3 flex max-md:justify-center">
                <Image src="/icons/checkout/payment-methods.svg" width={180} height={15} alt="Visa, Shop Pay, Paypal, Mastercard, Google Pay, Apple Pay and Amex" aria-label="Visa, Shop Pay, Paypal, Mastercard, Google Pay, Apple Pay and Amex" />
              </span>
            </div>

            <a className="refuse-offer block mt-5 text-center text-deep-carmine-pink text-xs md:text-lg underline uppercase" href="#step4">
              {productDict["refuse-offer"]}
            </a>
          </div>

          <div className="guarantee grid grid-cols-[auto_auto] gap-4">
            <div className="badge relative w-12 h-12 md:w-[88px] md:h-[88px]" aria-hidden>
              <Image src="/images/guarantee.png" fill alt="" />
            </div>
            <div className="text text-xs md:text-base leading-snug" dangerouslySetInnerHTML={{
              __html: dict["thirdStep"]["guarantee"]
            }}></div>
          </div>
        </div>
      </div>
    </article>
  )
};

export default Offer;