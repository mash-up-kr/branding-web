import * as Styled from './LinearGradientSphere.styled';

interface LinearGradientSphereProps extends Styled.SphereContainerProps {
  variant?: Styled.TSphereVariants;
}

const LinearGradientSphere = ({
  variant = 'DEFAULT',
  diameterRem,
  ...positionProps
}: LinearGradientSphereProps) => (
  <Styled.SphereContainer diameterRem={diameterRem} {...positionProps}>
    <Styled.BackLight variant={variant} diameterRem={diameterRem * 0.8333} />
    <Styled.Sphere variant={variant} diameterRem={diameterRem} />
  </Styled.SphereContainer>
);

export default LinearGradientSphere;
