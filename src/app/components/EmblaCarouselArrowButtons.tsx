import React from 'react';

type ArrowButtonProps = {
  onClick: () => void;
  disabled: boolean;
};

export const PrevButton: React.FC<ArrowButtonProps> = ({ onClick, disabled }) => (
  <button className="embla__button embla__button--prev" onClick={onClick} disabled={disabled}>
    Prev
  </button>
);

export const NextButton: React.FC<ArrowButtonProps> = ({ onClick, disabled }) => (
  <button className="embla__button embla__button--next" onClick={onClick} disabled={disabled}>
    Next
  </button>
);

export const usePrevNextButtons = (
  emblaApi: any,
  onNavButtonClick: (emblaApi: any) => void
) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = React.useState(true);

  React.useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());
    };

    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi]);

  const onPrevButtonClick = () => {
    if (!emblaApi) return;
    onNavButtonClick(emblaApi);
    emblaApi.scrollPrev();
  };

  const onNextButtonClick = () => {
    if (!emblaApi) return;
    onNavButtonClick(emblaApi);
    emblaApi.scrollNext();
  };

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};
