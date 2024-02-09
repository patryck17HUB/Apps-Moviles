import {Text, View, StyleSheet} from 'react-native';

const TextComponent = () => {
    return(
        <View style={styles.textContainer}>
            <Text style={styles.text}>Nombre: Patryck Yael Poumian Camacho</Text>
            <Text style={styles.text}>Ocupacion: Estudiante</Text>
            <Text style={styles.text}>Edad: 20</Text>
            <Text style={styles.text}>Fecha de nacimiento: 17/05/2024</Text>
            <Text style={styles.text}>Estado Civil: Soltero</Text>
            <Text style={styles.text}>Sobre mi: Mi autobiografía comienza el 17 de mayo de 2003 en la ciudad de Celaya, Guanajuato. Inicié mi educación en el Kinder Girasol, para luego ser inscrito en la Primaria Profesor Moisés Hernández Navarro, donde pasé seis años de formación académica y personal. Durante este tiempo, nació mi hermana Diana, enriqueciendo aún más nuestra familia.

Mis padres, Jorge Alain Poumián Soto y Alma Carolina Camacho Hernández, han sido pilares fundamentales en mi vida, brindándome amor, apoyo y orientación en cada paso de mi trayectoria educativa.

Continué mi formación en la Secundaria Oficial de Celaya, seguida de la Preparatoria Oficial de Celaya, donde consolidé mis habilidades académicas y comencé a vislumbrar mis metas futuras.

Finalmente, ingresé a la Universidad Autónoma de Querétaro, donde actualmente rento un departamento y comparto vivienda con mi compañero de clases y amigo, César Hernández Pescador Córdova. Aquí, me sumerjo en un ambiente de aprendizaje riguroso y oportunidades de crecimiento personal y profesional.

Mi vida ha sido un continuo proceso de desarrollo y aprendizaje, marcado por el apoyo de mi familia y la determinación de alcanzar mis metas. A medida que avanzo en mi camino hacia el futuro, estoy agradecido por las experiencias vividas y emocionado por las oportunidades que están por venir.
            </Text>
        </View>
      );
}

const styles = StyleSheet.create({
    textContainer: {
        marginTop: 10,
        marginHorizontal: 5,
        backgroundColor: '#939393',
        borderWidth: 5,
        borderColor: 'Black',
    },
    text: {
        marginHorizontal: 5,
        fontSize: 20,
        fontWeight: 'normal',
        color: '#E3E3E3',
      }
})

export default TextComponent;