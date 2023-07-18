import { useState, useEffect } from 'react';
import { serviceAddOns, socials } from '../utils';
import { FaCheck, FaCopy } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';
import { AiOutlineCheckCircle } from 'react-icons/ai';

interface ISocial {
  name: string;
  url: string;
  icon: JSX.Element;
}

function CallToAction() {
  const [activeSocial, setActiveSocial] = useState<ISocial>(socials[0]);

  return (
    <section className="h-max w-full bg-fixed bg-[url('./assets/bg1.jpg')] bg-cover bg-center">
      <div className="backdrop-brightness-50 text-white">
        <div className="container ">
          <div className="flex justify-center text-center">
            <div className="lg:w-4/5 flex flex-col items-center">
              <h2 className="text-4xl font-bold mb-2 leading-20">
                A perfect team member could make the difference!
              </h2>
              <p className="text-sm mb-5 text-slate-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                error cumque unde vitae sapiente enim aut id nemo ducimus
                aliquam. Ex doloribus in aut tempora, ratione debitis non cum
                recusandae aliquid officiis nobis numquam sapiente dolor, hic
                consequuntur accusamus quaerat.
              </p>
              <ul className="grid grid-cols-3 gap-5 text-slate-200">
                {serviceAddOns.map(addon => (
                  <li key={addon} className="">
                    <div className="flex items-start gap-2 leading-none text-sm">
                      <span className='text-[purple]'>
                        <AiOutlineCheckCircle />
                      </span>
                      <span>{addon}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <div>
                {/* <h3 className="text-lg font-semibold my-3">
                  Let's get in touch...
                </h3> */}
                <ul className="flex items-center gap-4 mt-7">
                  {socials.map((social: ISocial) => (
                    <li>
                      <button
                        onClick={() => setActiveSocial(social)}
                        className={[
                          'flex items-center gap-2 btn-default',
                        //   activeSocial?.name === social.name && 'active',
                        ].join(' ')}
                      >
                        <span className="text-lg">{social.icon}</span>
                        <span className="font-semibold">{social.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* <div className="lg:w-1/2"> */}
              {/* <h3 className="text-2xl font-semibold mb-8">
                Let's get in touch...
              </h3>
              <ul className="flex items-center gap-4">
                {socials.map((social: ISocial) => (
                  <li>
                    <button
                      onClick={() => setActiveSocial(social)}
                      className={[
                        'flex items-center gap-2 btn-default',
                        activeSocial?.name === social.name && 'active',
                      ].join(' ')}
                    >
                      <span className="text-lg">{social.icon}</span>
                      <span className="font-semibold">{social.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <label htmlFor="social-field" className="block text-sm">
                  {activeSocial.name}:
                </label>
                <div className="flex gap-4">
                  <input
                    id="social-field"
                    type="text"
                    value={activeSocial.url}
                    className="border px-2 text-xs h-8 rounded text-[#000]"
                  />
                  <CopyButton text={activeSocial.url} />
                  <a
                    href={
                      activeSocial.name === 'Email'
                        ? `mailto:${activeSocial.url}`
                        : activeSocial.url
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Visit"
                    className="btn-default text-[1rem] flex items-center"
                  >
                    <span className="sr-only">Visit</span>
                    <HiExternalLink />
                  </a>
                </div>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
    });
  };

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    }
  }, [copied]);

  return (
    <button
      onClick={copyToClipboard}
      className={[
        'btn-default',
        copied && 'text-green-700 border-green-400',
      ].join(' ')}
      title="Copy"
      disabled={copied}
    >
      {copied ? <FaCheck /> : <FaCopy />}
    </button>
  );
}
export default CallToAction;
