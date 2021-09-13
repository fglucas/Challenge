create or replace FUNCTION get_uv_indice
    (id t_sss_solar_incidences.solar_incidence_id%TYPE) RETURN STRING IS
        uvIndice t_sss_solar_incidences.uv_indice%TYPE := '';
BEGIN
    SELECT uv_indice
    INTO uvIndice
    FROM t_sss_solar_incidences
    WHERE solar_incidence_id = id;
    RETURN uvIndice;
END get_uv_indice;


create or replace PROCEDURE get_recommended_protection
(uvIndice IN STRING) IS
BEGIN
    IF uvIndice='Baixo' THEN
        DBMS_OUTPUT.PUT_LINE('Use óculos de sol em dias claros.');
    ELSIF uvIndice='Moderado' THEN
        DBMS_OUTPUT.PUT_LINE('Fique na sombra perto do meio-dia, quando o sol é mais forte.');
    ELSIF uvIndice='Alto' THEN
        DBMS_OUTPUT.PUT_LINE('Reduza o tempo de exposição ao sol entre as 10:00h. e 16:00h.');
    ELSIF uvIndice='Muito Alto' THEN
        DBMS_OUTPUT.PUT_LINE(' Tomar precauções extra, porque a pele desprotegida e os olhos vão se danificar e podem queimar-se rapidamente.');
    ELSIF uvIndice='Extremo' THEN
        DBMS_OUTPUT.PUT_LINE('Tomar todas as precauções.');
    END IF;
END;
