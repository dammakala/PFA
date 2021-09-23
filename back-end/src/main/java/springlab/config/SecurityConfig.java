package springlab.config;
/*
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.sql.DataSource;


@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(securedEnabled = true)*/
public class SecurityConfig //extends WebSecurityConfigurerAdapter 
{}
/*
    @Autowired
    public void globalConfig(AuthenticationManagerBuilder auth, DataSource dataSource) throws Exception {
        auth.jdbcAuthentication()
                .dataSource(dataSource)
                .usersByUsernameQuery("select cin as principal ,telephone as credentials ,true from Utilisateurs where cin=? ")
                .authoritiesByUsernameQuery("select cin as principal, role as role from Role,Utilisateurs where Role.id_r=Utilisateurs.id_r and cin=?")
                
;
		

    }/*
    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http

                .csrf().disable()

                .authorizeRequests()
                //.antMatchers("/user/delete/**").authenticated()
                .antMatchers("/v1/user/**").authenticated()
                //.antMatchers("/analyse/delete/**").authenticated()
                .antMatchers("/v1/user/**").authenticated()
                .and()
                .formLogin()
                .permitAll()
                .defaultSuccessUrl("/index.html");

    }/*
    @Bean
    public BCryptPasswordEncoder encodePWD(){
        return new BCryptPasswordEncoder();
    }*/

