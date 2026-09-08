package basics;

import java.util.Optional;

/**
 * Exercism Java Track: Two-Fer Solution
 * Follows Java AIR guidelines: explicit types, immutability, Optional handling.
 */
public final class TwoFer {

    public String twofer(final String name) {
        final String recipient = Optional.ofNullable(name)
                .filter(s -> !s.trim().isEmpty())
                .orElse("you");
        return String.format("One for %s, one for me.", recipient);
    }
}
