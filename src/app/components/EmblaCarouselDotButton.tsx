import React from 'react';

type DotButtonProps = {
  onClick: () => void;
  className: string;
};

export const DotButton: React.FC<DotButtonProps> = ({ onClick, className }) => (
  <button className={className} type="button" onClick={onClick} />
);

export const useDotButton = (
  emblaApi: any,
  onNavButtonClick: (emblaApi: any) => void
) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  React.useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi]);

  const onDotButtonClick = (index: number) => {
    if (!emblaApi) return;
    onNavButtonClick(emblaApi);
    emblaApi.scrollTo(index);
  };

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};
