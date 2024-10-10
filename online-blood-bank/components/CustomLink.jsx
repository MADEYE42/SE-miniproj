"use client"; // Ensure this is a client component
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';

const CustomLink = ({ href, className, children }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
};

CustomLink.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default CustomLink;
