package com.PISBP.config;

import com.PISBP.MyUserDetails;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.security.config.annotation.web.WebSecurityConfigurer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.cors.CorsConfiguration;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Configuration
@EnableWebSecurity
@CrossOrigin("http://localhost:5175")
public class SecurityConfig{


    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .cors().configurationSource(request -> new CorsConfiguration().applyPermitDefaultValues()).and()
                .authorizeHttpRequests(request->request
                        .requestMatchers("/", "/home").permitAll()
                        .requestMatchers("/api/hello").authenticated()
                        .anyRequest().authenticated())
                .formLogin().successHandler(new AuthenticationSuccessHandler() {
                    @Override
                    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
                        String username = authentication.getName(); // Get username
                        String userId = String.valueOf(((MyUserDetails) authentication.getPrincipal()).getId()); // Get userId (assuming you have UserDetails implementation)
                        String role = authentication.getAuthorities().iterator().next().getAuthority(); // Get role

                        Map<String, Object> responseData = new HashMap<>();
                        responseData.put("username", username);
                        responseData.put("userId", userId);
                        responseData.put("role", role);

                        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
                        response.getWriter().write(new ObjectMapper().writeValueAsString(responseData));
                    }

                }).failureHandler(new AuthenticationFailureHandler() {
                    @Override
                    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {
                        response.getWriter().write("unaturhorized");
                    }
                }).permitAll().and()
                .logout().permitAll().and()
                .exceptionHandling()
                .authenticationEntryPoint((request, response, authException) -> {
                    response.setStatus(HttpServletResponse.SC_OK);
                    response.getWriter().write("Unauthorized");
                });
        http.csrf().disable();
        return http.build();
    }
    @Bean
    public PasswordEncoder getPasswordEncoder(){
        return NoOpPasswordEncoder.getInstance();
    }
}