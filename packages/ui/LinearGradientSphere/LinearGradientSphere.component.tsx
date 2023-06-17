import * as Styled from './LinearGradientSphere.styled';

interface LinearGradientSphereProps extends Styled.SphereContainerProps {
  variant?: Styled.TSphereVariants;
}

const LinearGradientSphere = ({
  variant = 'DEFAULT',
  diameter,
  ...positionProps
}: LinearGradientSphereProps) => {
  const [diameterUnit] = diameter.match(/px|em|rem|%|vh|vw/) ?? [''];
  const diameterValue = diameter.replace(diameterUnit, '');

  const BACK_LIGHT_SCALE = 0.8333;
  const backLightDiameter = +diameterValue * BACK_LIGHT_SCALE;

  return (
    <Styled.SphereContainer diameter={diameter} {...positionProps}>
      <Styled.BackLight variant={variant} diameter={`${+backLightDiameter}${diameterUnit}`} />
      <Styled.Sphere variant={variant} diameter={diameter} />
    </Styled.SphereContainer>
  );
};

export default LinearGradientSphere;
