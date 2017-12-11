package org.simbasecurity.core.service.communication.mail.template;

import com.google.common.collect.Maps;
import org.assertj.core.api.Assertions;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.simbasecurity.core.domain.Language;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.Map;

import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.simbasecurity.core.domain.Language.en_US;
import static org.simbasecurity.core.domain.Language.fr_FR;
import static org.simbasecurity.core.domain.Language.nl_NL;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:persistenceTestContext.xml")
public class VelocityTemplateServiceTest {

    @Autowired
    private VelocityTemplateService velocityTemplateService;

    @Test
    public void convertTemplate() throws Exception {
        String template = "testTemplate.vm";
        Map<String, String> properties = Maps.newHashMap();

        String mailBody = velocityTemplateService.createMailBody(template, en_US, properties);

        Assertions.assertThat(mailBody).isEqualTo("This is a $property1 and this too $property2");
    }

    @Test
    public void convertTemplate_withParameter() throws Exception {
        String template = "testTemplate.vm";
        Map<String, String> properties = Maps.newHashMap();
        properties.put("property1","value1");
        properties.put("property2","value2");

        String mailBody = velocityTemplateService.createMailBody(template, en_US, properties);

        Assertions.assertThat(mailBody).isEqualTo("This is a value1 and this too value2");
    }

    @Test
    public void convertTemplate_withParameter_InFrench() throws Exception {
        String template = "testTemplate.vm";
        Map<String, String> properties = Maps.newHashMap();
        properties.put("property1","value1");
        properties.put("property2","value2");

        String mailBody = velocityTemplateService.createMailBody(template, fr_FR, properties);

        Assertions.assertThat(mailBody).isEqualTo("Ceci n'est pas un value1 et ceci n'est pas un value2 aussi -Magritte");
    }

    @Test
    public void convertTemplate_withParameter_InDutch() throws Exception {
        String template = "testTemplate.vm";
        Map<String, String> properties = Maps.newHashMap();
        properties.put("property1","value1");
        properties.put("property2","value2");

        String mailBody = velocityTemplateService.createMailBody(template, nl_NL, properties);

        Assertions.assertThat(mailBody).isEqualTo("Dit is een value1 en dit ook value2");
    }

    @Test
    public void createMailBody_invalidTemplate() throws Exception {
        assertThatThrownBy(() -> velocityTemplateService.createMailBody("invalidTemplate", en_US, Maps.newHashMap()))
                .isInstanceOf(RuntimeException.class)
                .hasMessage("Could not merge template invalidTemplate because of Unable to find resource 'velocity/en_US/invalidTemplate'");
    }
}